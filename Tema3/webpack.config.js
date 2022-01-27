const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
     module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
            test : /\.css$/i,
            use : ['style-loader', 'css-loader'],
            },
            {
            test : /\.(png|svg|jpg|gif)$/i,
            type : 'asset/resource',
            },
            
        ],

    },

};