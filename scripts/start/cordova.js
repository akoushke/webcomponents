const path = require('path');
const WebpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const config = require("../../webpack")

const compiler = webpack(config)


const mobileServer = new WebpackDevServer(compiler.compilers[1], {
	contentBase: path.join(__dirname, '../../platforms/cordova/src'),
	hot: true,
	open: true,
	historyApiFallback: false,
	compress: true,
	clientLogLevel: 'silent',
});


mobileServer.listen(5000, 'localhost', function() {});
