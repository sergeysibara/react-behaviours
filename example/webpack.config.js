var path = require('path');
var webpack = require('webpack');
//var CopyWebpackPlugin = require('copy-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

function resolve(targetPath) {
    return path.resolve(__dirname, targetPath)
}

var src = path.join(__dirname, 'src');
var dist = path.join(__dirname, 'dist');

var paths = {
    src: src,
    bundles: dist,

    react: resolve('./../node_modules/react/dist/react-with-addons.js'),
    reactDom: resolve('./../node_modules/react-dom/dist/react-dom.js'),
    reactBehaviours: resolve('./../library/dist/react-behaviours.js')
};


module.exports = [
    {
        context: src,
        entry: {
            index: './index.js',
            vendor: [
                paths.react,
                paths.reactDom,
                paths.reactBehaviours
            ]
        },
        output: {
            path: paths.bundles,
            filename: '[name].js', //[name] -имя точки входа в этом конфиге, а не самого файла
            chunkFilename: "[id].bundle.js"
        },
        devtool: 'source-map',

        resolve: {
            root: path.resolve(__dirname, './src'),
            alias: {
                react: paths.react,
                reactDom: paths.reactDom,
                reactBehaviours: paths.reactBehaviours,
                appmodule: path.resolve(__dirname, './src/app-module'),
            },
            extensions: ['', '.js']
        },

        module: {
            loaders: [
                {
                    test: /.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules|react-behaviours-library/,
                    query: {
                        presets: ['es2015', 'react',]
                    }
                }
            ],
            noParse: [
                paths.react,
            ]
        },
        plugins: [
            //Reversing the order of the chunks!
            new webpack.optimize.CommonsChunkPlugin({
                names: ["vendor"],
                minChunks: Infinity
            })
        ]
    }
];