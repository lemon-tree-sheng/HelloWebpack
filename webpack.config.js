/*
* @Author: shengxingyue
* @Date:   2017-10-14 20:15:30
* @Last Modified by:   shengxingyue
* @Last Modified time: 2017-10-15 11:52:26
*/
const config = {
	entry: './src/index.js',

	output: {
		path: __dirname + '/dist/',
		filename: 'bundle.js'
	},

	module : {
		rules : [
			{test: /\.css$/, use: ['style-loader','css-loader']},
		]
	}
};
module.exports = config;