/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:15:30
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-16 22:22:46
*/
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
	entry: {
		app: './src/index.js',
	},

	output: {
		path: __dirname + '/dist/',
		filename: '[name].bundle.js'
	},

	module: {
		rules : [
			{
				test: /\.css$/, 
				use: ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader"})
			},
        	{
        		test: /\.(svg|png|jpg|gif)$/,
        		use: "file-loader"
        	}
		]
	},

	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			title: "Output Management"
		}),
		new CleanWebpackPlugin(['dist'])
	],

	// 开发环境用于追踪问题代码的位置
	devtool: 'inline-source-map',

	// 动态编译刷新页面
	devServer: {
		contentBase: './dist'
	}
};
module.exports = config;