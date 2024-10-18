module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  // 其他配置项...
  overrides: [
    {
      files: ['**/*.vue'],
      parserOptions: {
        // 添加这一行禁用 Babel 配置文件检查
        requireConfigFile: false
      }
    }
  ]
}
