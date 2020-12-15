const path = require('path');
module.exports = {
  entry: './dist/food-app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}