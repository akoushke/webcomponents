const path = require('path');
const WebpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const config = require("./../../webpack")

const compiler = webpack(config)


const cordovaServer = new WebpackDevServer(compiler.compilers[0], {
	contentBase: path.join(__dirname, '../../platforms/reactJS/src'),
	hot: true,
	open: true,
	historyApiFallback: false,
	compress: true,
	clientLogLevel: 'silent',
});


cordovaServer.listen(5001, 'localhost', function() {});
