const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.jpg$/,
            loader: 'file-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
