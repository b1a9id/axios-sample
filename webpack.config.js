module.exports = {
    context: __dirname + '/src',
    entry: {
        javascript: './index.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2016']
                }
            }
        ]
    }
}