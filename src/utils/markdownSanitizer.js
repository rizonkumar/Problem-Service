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

  console.log("Converted HTML:", htmlFromMarkdown);

  // 2. Sanitize the generated HTML
  const sanitizedHtml = sanitizeHTML(htmlFromMarkdown, {
    allowedTags: sanitizeHTML.defaults.allowedTags.concat(["img"]),
  });

  console.log("Sanitized HTML:", sanitizedHtml);

  // 3. Convert sanitized HTML back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log("Sanitized Markdown", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = cleanAndSanitizeMarkdown;
