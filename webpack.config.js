const path = require('path');

module.exports = {
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
};
