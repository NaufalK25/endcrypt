import * as path from 'path';
import * as dotenv from 'dotenv';
import * as webpack from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
dotenv.config();

const getWebpackMode = () => {
    const mode = process.env.WEBPACK_MODE;
    return mode ? (mode === 'production' ? 'production' : 'development') : 'development';
};

const config: webpack.Configuration = {
    entry: './src/index.ts',
    mode: getWebpackMode(),
    output: {
        charset: true,
        clean: true,
        filename: 'bundle-[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    resolve: {
        extensions: ['.ts', '.css', '.html']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main-[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html'
        })
    ]
};

export default config;
