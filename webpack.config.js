const path = require('path');
const webpack = require('webpack');

const config = {
    devtool: 'eval',
    context: path.join(__dirname, 'client', 'app'),
    entry: {
        app: [
            './app.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'public', 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client', 'app'),
                loader: 'ng-annotate!babel'
            },
            {
                test: /\.html$/,
                include: path.join(__dirname, 'client'),
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'client', 'assets', 'styles'),
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                include: [
                    path.join(__dirname, 'client', 'assets', 'fonts'),
                    path.join(__dirname, 'client', 'assets', 'images')
                ],
                loader: 'file'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: './client',
        hot: true
    }
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'source-map';
    config.plugins = [
        // new webpack.optimize.UglifyJsPlugin()
    ];
}

module.exports = config;
