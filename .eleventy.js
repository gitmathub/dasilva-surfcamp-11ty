const pluginSass = require("eleventy-plugin-sass")
const Image = require("@11ty/eleventy-img")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'src/assets': "_assets/"
    })
    eleventyConfig.addPlugin(pluginSass, {
        watch: ["src/styles/*.scss"],
        outputDir: "dist/_assets"
    })

    // override anouying md code formatting
    const markdownIt = require("markdown-it");
    const options = {
        html: true
    };
    const markdownLib = markdownIt(options).disable('code');
    eleventyConfig.setLibrary("md", markdownLib);

    // works also with addLiquidShortcode or addJavaScriptFunction
    eleventyConfig.addNunjucksAsyncShortcode("responsiveimage", async function (src, alt, sizes = "100vw") {
        if (alt === undefined) {
            // You bet we throw an error on missing alt (alt="" works okay)
            throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
        }

        let metadata = await Image(src, {
            widths: [230, 300, 350, 480, 768, 1024],
            formats: ['webp', 'jpeg']
        });
        let lowsrc = metadata.jpeg[0];

        return `<picture>
      ${Object.values(metadata).map(imageFormat => {
        return `  <source type="image/${imageFormat[0].format}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;
    })

    return {
        dir: {
            input: 'src/pages',
            layouts: "../templates",
            includes: "../templates",
            data: "../data",
            output: 'dist'
        },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'md', 'css', 'html'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: "njk"
    }
}