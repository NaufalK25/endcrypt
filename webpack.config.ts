import 'webpack-dev-server';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
dotenv.config();

const config: webpack.Configuration = {
    entry: './src/index.ts',
    mode: process.env.NODE_ENV ? (process.env.NODE_ENV === 'production' ? 'production' : 'development') : 'development',
    output: {
        charset: true,
        clean: true,
        filename: 'bundle-[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ]
};

export default config;
