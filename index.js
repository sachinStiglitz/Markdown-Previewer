const editor = document.querySelector('#editor');
const preview = document.querySelector('#preview');

// Function to update the preview with the converted HTML
const updatePreview = () => {
  const markdownText = editor.value;
  
  // Convert markdown to HTML using Marked library
  const htmlText = marked(markdownText);
  
  preview.innerHTML = htmlText;
};

// Add input event listener to the editor
editor.addEventListener('input', updatePreview);

// Default markdown text for the editor
const defaultMarkdown = `# Heading 1
## Heading 2
[Link](https://example.com)
\`Inline code\`

\`\`\`
// Code block
const message = 'Hello, World!';
console.log(message);
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

![Image](https://example.com/image.jpg)

**Bolded text**`;

// Set default markdown in the editor and update the preview
editor.value = defaultMarkdown;
updatePreview();
