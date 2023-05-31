const { Circle, Triangle, Square } = require('../lib/shapes');

describe('Shape Classes', () => {
  test('Circle renders SVG string with correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svgString = circle.render();
    const expectedOutput = '<circle cx="150" cy="100" r="80" fill="red" />';
    expect(svgString).toEqual(expectedOutput);
  });

  test('Triangle renders SVG string with correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svgString = triangle.render();
    const expectedOutput = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    expect(svgString).toEqual(expectedOutput);
  });

  test('Square renders SVG string with correct color', () => {
    const square = new Square();
    square.setColor('green');
    const svgString = square.render();
    const expectedOutput = '<rect x="50" y="50" width="200" height="200" fill="green" />';
    expect(svgString).toEqual(expectedOutput);
  });
});