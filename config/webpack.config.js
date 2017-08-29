const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const rootDir = path.resolve(__dirname, '../');
const buildDir = path.resolve(__dirname, rootDir + '/dist');
const sourceDir = path.resolve(__dirname, rootDir + '/src/client');
const publicDestDir = path.resolve(__dirname, rootDir + '/dist/public');

const config = {
	entry: sourceDir + '/index.js',
	output: {
		path: buildDir + '/public/assets',
		filename: 'bundle.js',
		sourceMapFilename: "bundle.map"
	},
	devtool: "#source-map",
	devServer: {
		contentBase: publicDestDir
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					//presets: ['env', 'stage-0', 'react']
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{ 
				test: /\.css$/, 
				loader: [ 'style-loader', 'css-loader' ]
			},
		]
	},
	resolve: {
		modules: [
			sourceDir, 
			"node_modules"
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: rootDir + '/public/**/*', to: buildDir }
		]),
		new WriteFilePlugin()
		// new webpack.optimize.UglifyJsPlugin({
			// sourceMap: true,
			// warnings: false,
			// mangle: true
		// })
	]	
};

module.exports = config;