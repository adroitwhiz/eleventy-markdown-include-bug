module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: 'main.md',
            output: 'public'
        },
        pathPrefix: '/',
        markdownTemplateEngine: 'njk'
    };
}
