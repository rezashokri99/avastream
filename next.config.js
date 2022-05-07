/** @type {import('next').NextConfig} */
const path = require('path')


// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig


module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}