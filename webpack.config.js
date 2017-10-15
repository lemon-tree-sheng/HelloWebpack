/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:15:30
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-15 13:48:31
*/
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
	entry: './src/index.js',

	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
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
		new ExtractTextPlugin('style.css')
	]
};
module.exports = config;