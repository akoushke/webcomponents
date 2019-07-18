const path = require('path');
const WebpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const config = require("../../webpack")

const compiler = webpack(config)

const mobileServer = new WebpackDevServer(compiler.compilers[2], {
	contentBase: path.join(__dirname, '../../platforms/angular/src'),
	hot: true,
	open: true,
	compress: true,
	clientLogLevel: 'silent',
});


mobileServer.listen(5002, 'localhost', function() {});
