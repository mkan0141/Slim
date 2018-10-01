const path = require('path');
ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        target: 'node',
        entry: './src/index.tsx',
        cache: true,
        mode: 'development', // "production" | "development" | "none"
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader'
            }],
        },
        resolve: {
            extensions: [
                '.ts',
                '.tsx',
                '.js',
            ]
        },
    },
    {
        mode: 'development',
        entry: {
            style: './src/index.scss'
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.css'
        },
        module: {
            rules: [
                {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('bundle.css'),
        ],
    }
];
