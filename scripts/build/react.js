const Webpack = require("webpack")
const config = require("../../webpack")

Webpack(config).compilers[0].run();