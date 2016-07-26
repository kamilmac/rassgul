var path            = require('path');
var webpack         = require('webpack');
var postcss_cssnext = require('postcss-cssnext');

module.exports = {
    devtool: 'eval',
    // devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1'],
                    plugins: ['transform-decorators-legacy', 'react-hot-loader/babel']
                }
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [postcss_cssnext];
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        './app/bootstrap'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.DedupePlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true
            },
            comments: false
        }),
        new webpack.DefinePlugin({
           'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
    ]
};
