var path = require('path');
var webpack = require('webpack');
//var CopyWebpackPlugin = require('copy-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

function resolve(targetPath) {
    return path.resolve(__dirname, targetPath)
}

var paths = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),

    react: resolve('./node_modules/react/dist/react-with-addons.js'),
    reactBehaviours: resolve('./dist/src.js')
};


module.exports =
    {
        entry:  resolve('./src/index.js'),
        devtool: 'source-map',
        output: {
            path: paths.dist,
            filename: 'react-behaviours.js',
            library: 'react-behaviours',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        externals: [
            {
                react: {
                    root: 'React',
                    commonjs2: 'react',
                    commonjs: 'react',
                    amd: 'react'
                }
            }
        ],

        module: {
            loaders: [
                {
                    test: /.js?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules|dist/,
                    query: {
                        presets: ['es2015', 'react',]
                    }
                }
            ]
        },
        resolve: {
            root: path.src,
            extensions: ['', '.js']
        }

    };
