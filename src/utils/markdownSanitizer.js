const marked = require("marked");
const sanitizeHTML = require("sanitize-html");
const TurndownService = require("turndown");

/**
 * Cleans and sanitizes markdown content to ensure it is safe and properly formatted.
 * @param {string} markdownInput - The raw markdown content to be sanitized.
 * @returns {string} - The sanitized markdown content.
 */
function cleanAndSanitizeMarkdown(markdownInput) {
  // Initialize TurndownService for converting HTML back to markdown
  const turndownService = new TurndownService();

  // 1. Convert markdown input to HTML
  const htmlFromMarkdown = marked.parse(markdownInput);

  // 2. Sanitize the generated HTML
  const sanitizedHtml = sanitizeHTML(htmlFromMarkdown, {
    allowedTags: sanitizeHTML.defaults.allowedTags.concat(["img"]),
  });

  // 3. Convert sanitized HTML back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = cleanAndSanitizeMarkdown;
