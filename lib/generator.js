const { promptUser }= require('./prompts');
const { Circle, Triangle, Square } = require('./shapes');
const { renderLogo } = require('./render');

// Generate the SVG logo
function generateLogo() {
  promptUser()
    .then(({ text, textColor, shape, shapeColor }) => {
      let shapeObject;
      switch (shape) {
        case 'circle':
          shapeObject = new Circle();
          break;
        case 'triangle':
          shapeObject = new Triangle();
          break;
        case 'square':
          shapeObject = new Square();
          break;
      }

      shapeObject.setColor(shapeColor);

      const filePath = renderLogo(shapeObject, text, textColor);
      console.log(`Generated ${filePath}`);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

module.exports = { generateLogo };
