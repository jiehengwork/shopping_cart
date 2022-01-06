const path = require('path');
module.exports = {
  mode: "production",
  entry: { 
      index: './src/index.js'
  },
  output: { 
      filename: 'bundle.js',
      path: path.resolve('./build'),
  },
  module: {
    rules: [
        { 
            test: /.js$/,
            exclude: /node_modules/,
            use: { 
                loader: 'babel-loader',
                options: { 
                    presets: ['@babel/preset-react', '@babel/preset-env'] 
                } 
            } 
        },
    ]
  },
  devServer: {
    static: './build',
    port: 8080
  },
};