const path = require('path'),
    webpack = require('webpack'),
    serverPort = 8008;

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:' + serverPort);
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        App: getEntrySources([
            './src/index.js'
        ])
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://localhost:8008/',
        filename: 'public/app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
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
        extensions: ['', '.js', '.jsx', '.scss', '.css', '.png', '.jpg']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: serverPort
    }
};
