const path = require("path");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");
dotenv.config();

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    output: {
        filename: "bundle-[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
};
