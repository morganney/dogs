module.exports = function (api) {
  const env = process.env.NODE_ENV || 'development'
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: 'auto'
      }
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      }
    ]
  ]

  api.cache(() => env === 'development')

  return {
    presets
  }
}
