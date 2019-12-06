const path = require('path');


module.exports = {
    target: 'web',
    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.js',
        publicPath: '/js/'
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    devServer: {
        port: 8888
    }
}