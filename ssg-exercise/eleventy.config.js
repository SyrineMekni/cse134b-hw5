module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("Media");
    eleventyConfig.addPassthroughCopy("theme.js");
    eleventyConfig.addPassthroughCopy("fact-panel.js");

};
