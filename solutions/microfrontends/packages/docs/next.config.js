const ntm = require('next-transpile-modules')

module.exports = ntm([
  '@vercel/examples-ui',
  '@company/design-system',
  '@company/pages',
])({
  basePath: '/docs',
})
