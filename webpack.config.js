const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = (env) => {
	let mode = 'development';
	let target = 'web';
	let styleLoader = 'style-loader';
	let plugins = [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), '/dist/**/*')],
		}),
		new NodePolyfillPlugin(),
	];

	if (env.mode === 'production') {
		mode = 'production';
		target = 'browserslist';
		plugins.push(
			new TerserPlugin(),
			new MiniCssExtractPlugin({
				filename: 'style.[hashcontent:8].css',
			})
		);
		styleLoader = {
			loader: MiniCssExtractPlugin.loader,
			options: {
				publicPath: '',
			},
		};
	}

	return {
		entry: './src/index.js',
		output: {
			filename: 'bundle.[contenthash:8].js',
			path: path.resolve(__dirname, './dist'),
			assetModuleFilename: 'images/[hash][ext][query]',
		},
		mode: mode,
		target: target,
		cache: false,
		devtool: 'source-map',
		devServer: {
			historyApiFallback: true,
			port: 3000,
			hot: true,
			static: {
				directory: path.resolve(__dirname, './dist'),
			},
		},
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		},
		module: {
			rules: [
				{
					test: /\.(svg)$/,
					use: {
						loader: '@svgr/webpack',
					},
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/,
					type: 'asset',
					parser: {
						dataUrlCondition: {
							maxSize: 3 * 1024,
						},
					},
				},
				{
					test: /\.(ts|tsx)$/,
					use: {
						loader: 'ts-loader',
					},
				},
				{
					test: /\.(js|jsx)$/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
						},
					},
				},
				{
					test: /\.(sc|sa|c)ss$/,
					use: [
						styleLoader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: true,
							},
						},
						'postcss-loader',
						'sass-loader',
					],
				},
			],
		},
		plugins: plugins,
	};
};
