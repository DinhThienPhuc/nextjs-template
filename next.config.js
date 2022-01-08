/** @type {import('next').NextConfig} */

const withSvgr = require("next-svgr");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withSvgr], {
  reactStrictMode: true,
});
