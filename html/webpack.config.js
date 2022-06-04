const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin: CleanWebpackPlugins } = require('clean-webpack-plugin');
// console.dir(CleanWebpackPlugins, "pl");
// webpack配置
module.exports = {
  // 模式
  mode: 'production',
  // 入口
  entry: './src/main.ts',
  // 出口
  output: {
    // 出口路径   path.resolve拼接绝对路径
    path: path.resolve(__dirname, 'dist'),
    // 出口文件名
    filename: 'bundle.js',
    // 配置打包不适用箭头函数
    environment: {
      arrowFunction: false,
      const: false,
    },
  },
  // 指定webpack打包时要使用模块
  module: {
    // 指定规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 使用loader从后向前执行
        use: [
          {
            // 指定加载器
            loader: 'babel-loader',
            options: {
              // 设置定义环境
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 兼容目标浏览器
                    targets: {
                      chrome: '88',
                    },
                    // js运行环境
                    corejs: '3',
                    // 使用core.js方式
                    useBuiltIns: 'usage',
                  },
                ],
              ],
            },
          },
          'ts-loader',
        ],
        // 排除文件
        exclude: /node-modules/,
      },
      // css处理
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                    },
                  ],
                ],
              },
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  // webpack插件配置
  plugins: [
    new CleanWebpackPlugins(),
    new HtmlWebpackPlugin({ template: `${__dirname}/src/index.html` }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
