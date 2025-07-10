module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "content",             // where your Markdown lives
      includes: "_includes",     // where layout templates are stored
      output: "docs"                // where Eleventy puts the generated site for GitHub Pages
    },
    markdownTemplateEngine: "njk"    // tells Eleventy to use Nunjucks templating in markdown
  };
};