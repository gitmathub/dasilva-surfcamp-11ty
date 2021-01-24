const pluginSass = require("eleventy-plugin-sass")
const Image = require("@11ty/eleventy-img")

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "src/assets": "_assets/",
    "generated-images": "_assets/images",
  })

  eleventyConfig.addPlugin(pluginSass, {
    watch: ["src/styles/*.scss"],
    outputDir: "dist/_assets"
  })


  // override anouying md code formatting
  const markdownIt = require("markdown-it")({
      html: true
    })
    .disable('code')
  // .use(require('markdown-it-github-headings'))
  eleventyConfig.setLibrary("md", markdownIt)

  // generate images
  eleventyConfig.addNunjucksAsyncShortcode("image", ({
    src,
    alt,
    myClass
  }) => generateImages({
    src,
    alt,
    myClass
  }))

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


async function generateImages({
  src,
  alt,
  myClass
}) {

  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  const filename = src.match(/([^\/]+)\.(\w+)$/)[1]

  const metadata = await Image(src, {
    widths: [230, 300, 350, 480, 768, 1024, 2048],
    formats: ['jpeg'], //'webp'
    urlPath: "/_assets/images/",
    outputDir: "generated-images",
    filenameFormat: (id, src, width, format, options) => `${filename}-${width}-${id}.${format}`
  });

  const srcset = metadata.jpeg.filter(i => i).map(i => `${i.url} ${i.width}w`).join(', ')

  return `<img alt="${alt}" 
            data-sizes="auto"
            data-srcset="${srcset}"
            class="lazyload ${myClass}"
            style="display:block"
            >`;
  // style="display:block is important for lazyload to calculate correctly
}