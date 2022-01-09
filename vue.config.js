const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	devServer: {
		host: 'localhost',
		port: '8080',
		proxy: {
			'/api': {
				ws: false,
				target: 'http://localhost:8888',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set("@", resolve("src"))
			.set("assets", resolve("src/assets"))
			.set("components", resolve("src/components"))
			.set("views", resolve("src/views"))
			.set("util", resolve("src/util"))
	},
}