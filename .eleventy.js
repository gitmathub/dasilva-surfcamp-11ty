const pluginSass = require("eleventy-plugin-sass")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'src/assets': "_assets/static" })
    eleventyConfig.addPlugin(pluginSass, { watch: ["src/styles/*.scss"], outputDir : "dist/_assets" })

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
