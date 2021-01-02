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
    eleventyConfig.addNunjucksAsyncShortcode("image", async function ({src, alt, myClass}) {
        if (alt === undefined) {
            throw new Error(`Missing \`alt\` on myImage from: ${src}`);
        }
        let metadata = await Image(src, {
            widths: [230, 300, 350, 480, 768, 1024, 2048],
            formats: ['webp', 'jpeg'],
            urlPath: "/_assets/images/",
            outputDir: "src/assets/images",
        });
        // const srcset= metadata.jpeg.map(item => `${item.jpeg.url} ${item.jpeg.width}w`).join(", ")
        // const srcset = metadata.jpeg.map(item => `${item.jpeg.url} ${item.jpeg.width}w`)
        // console.log(srcset)
        return `<img alt="${alt}" 
            data-sizes="auto"
            data-srcset="${metadata.jpeg[0].url} ${metadata.jpeg[0].width}w, 
                ${metadata.jpeg[1].url} ${metadata.jpeg[1].width}w,
                ${metadata.jpeg[2].url} ${metadata.jpeg[2].width}w,
                ${metadata.jpeg[3].url} ${metadata.jpeg[3].width}w,  
                ${metadata.jpeg[4].url} ${metadata.jpeg[4].width}w, 
                ${metadata.jpeg[5].url} ${metadata.jpeg[5].width}w,
                ${metadata.jpeg[6].url} ${metadata.jpeg[6].width}w" 
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