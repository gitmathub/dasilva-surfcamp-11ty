const pluginSass = require("eleventy-plugin-sass")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/assets': "_assets/" })
    eleventyConfig.addPlugin(pluginSass, { watch: ["src/styles/*.scss"], outputDir : "dist/_assets" })

    // override anouying md code formatting
    const markdownIt = require("markdown-it");
    const options = {html: true};
    const markdownLib = markdownIt(options).disable('code');
    eleventyConfig.setLibrary("md", markdownLib);

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
