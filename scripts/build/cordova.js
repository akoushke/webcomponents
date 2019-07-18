const Webpack = require("webpack")
const config = require("../../webpack")

Webpack(config).compilers[1].run();