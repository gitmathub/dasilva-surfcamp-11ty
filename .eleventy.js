const pluginSass = require("eleventy-plugin-sass")
const Image = require("@11ty/eleventy-img")

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        "src/assets": "_assets/",
        "img": "/_assets/images/"
    })
    eleventyConfig.addPlugin(pluginSass, {
        watch: ["src/styles/*.scss"],
        outputDir: "dist/_assets"
    })

    // override anouying md code formatting
    const options = { html: true }
    const markdownIt = require("markdown-it")(options)
        .disable('code')
        // .use(require('markdown-it-github-headings'))
    eleventyConfig.setLibrary("md", markdownIt)

    // PICTURE
    eleventyConfig.addNunjucksAsyncShortcode("responsiveimage", async function (src, alt, sizes = "100vw") {
        // console.log("parameters: ", src, alt, sizes)
        if (alt === undefined) {
            throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
        }

        let metadata = await Image(src, {
            widths: [230, 300, 350, 480, 768, 1024],
            formats: ['webp', 'jpeg'],
            urlPath: "/_assets/images/",
            outputDir: "src/assets/images",
        });
        let lowsrc = metadata.jpeg[0];
        // console.log("lowsrc", lowsrc)

        return `<picture>
      ${Object.values(metadata).map(imageFormat => {
          console.log("sizes", sizes)
        return `  <source type="image/${imageFormat[0].format}" 
        srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
      }).join("\n")}
        <img
          src="${lowsrc.url}"
          width="${lowsrc.width}"
          height="${lowsrc.height}"
          alt="${alt}">
      </picture>`;
    })

    // IMAGE
    eleventyConfig.addNunjucksAsyncShortcode("image", async ({src, alt, myClass}) => {
        if (alt === undefined) {
            throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }
        let metadata = await Image(src, {
            widths: [230, 300, 350, 480, 768, 1024, 2048],
            formats: ['jpeg'], //'webp'
            urlPath: "/_assets/images/",
            outputDir: "img",
        });
        const srcset = metadata.jpeg.filter(i => i).map(i => `${i.url} ${i.width}w`).join(', ')
        
        return `<img alt="${alt}" 
            data-sizes="auto"
            data-srcset="${srcset}"
            loading="lazy"
            class="lazyload ${myClass}">`;        
     });

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