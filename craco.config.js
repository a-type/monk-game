const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          'react': './node_modules/react',
          'react-dom': './node_modules/react-dom',
          'three': './node_modules/three',
          'react-three-fiber': './node_modules/react-three-fiber',
          'planck-js': './node_modules/planck-js',
        }
      }
    }
  ]
}
