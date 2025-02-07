const path= require('path');
const {join}= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode: 'development',
    entry: join(__dirname, '/src', 'index.js'),
    output:{
        filename:'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
    ],
    devServer:{
        static: {
            directory: path.resolve(__dirname,"./"),
        },
        devMiddleware:{
        },
        open: true,
    },
    module:{
        rules:[
        {
            test: /\.jsx|js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options:{
                presets:[
                    '@babel/preset-env',
                    '@babel/preset-react',
                ],
            },
        },
        {
            test: /\.css$/i,
            use: ['style-loader','css-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.json&/,
            loader: 'json-loader',
            exclude: /node_modules/,
        }
        ],
    },
    resolve:{
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['.*', '.js', '.jsx'],
    },
};
