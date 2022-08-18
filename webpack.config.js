// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

// module.exports = {
//   resolve: {
//     plugins: [new NodePolyfillPlugin()],
//     target: "node",
//     fallback: {
//       crypto: require.resolve("crypto-browserify"),
//       zlib: require.resolve("browserify-zlib"),
//       stream: require.resolve("stream-browserify"),
//       http: require.resolve("stream-http"),
//       https: require.resolve("stream-browserify"),
//       url: require.resolve("/url"),
//       path: require.resolve("path-browserify"),
//       querystring: require.resolve("querystring-es3"),
//       timers: require.resolve("timers.browserify"),
//     },
//   },
// };

module.exports = {
devServer: {
    compress: true,
    disableHostCheck: true,  
 }}