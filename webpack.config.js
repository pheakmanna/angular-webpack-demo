var webpack = require('webpack'),
	CleanPlugin = require('clean-webpack-plugin'),
	HtmlPlugin = require('html-webpack-plugin'),
	ngAnnotatePlugin = require('ng-annotate-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/app.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
			    test: /\.js?$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'babel'
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
				    "style",
				    "css!sass"
				)
			},
			{
				test: /\.html$/,
				loader: 'ngtemplate!html'
			}
       	]
 },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanPlugin(['dist']),
		new HtmlPlugin({
			title: 'Smirnoff Yo!',
			template: './app/index.ejs'
		}),
		new ngAnnotatePlugin({
            add: true
        }),
		new ExtractTextPlugin("app.css")
   ]
};
