const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

// Render the SVG logo content
function renderLogo(shapeObject, text, textColor) {
  let shapeContent;
  if (shapeObject instanceof Circle) {
    shapeContent = `<circle cx="150" cy="100" r="80" fill="${shapeObject.color}" />`;
  } else if (shapeObject instanceof Triangle) {
    shapeContent = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeObject.color}" />`;
  } else if (shapeObject instanceof Square) {
    shapeContent = `<rect x="50" y="50" width="200" height="200" fill="${shapeObject.color}" />`;
  } else {
    throw new Error('Invalid shape object.');
  }

  const filePath = 'examples/logo.svg';
  const svgContent = `
    <svg width="300" height="200">
      ${shapeContent}
      <text x="150" y="120" text-anchor="middle" fill="${textColor}" font-size="36">${text}</text>
    </svg>
  `;

  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Rendered ${filePath}`);
  
  return filePath;
}

module.exports = { renderLogo };