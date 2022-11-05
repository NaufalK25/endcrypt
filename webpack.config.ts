import * as path from 'path';
import * as dotenv from 'dotenv';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
dotenv.config();

const getWebpackMode = () => {
    const mode = process.env.WEBPACK_MODE;
    return mode ? (mode === 'production' ? 'production' : 'development') : 'development';
}

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
