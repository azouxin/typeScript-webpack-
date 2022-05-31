# ts基本配置
{
  "compilerOptions": {
    // 严格检查的总开关
    "strict": true,
    // 编译ts出现的版本
    "target": "ESNext",
    // 模块化版本
    "module": "amd",
    // 包含的库
    "lib": ["DOM", "esnext"],
    // outDir用来指定编译后所在的目录
    "outDir": "./dist",
    //  合并文件只支持amd
    "outFile": "./dist/app.js",
    // allowJs是否对js文件进行编译，默认是false
    "allowJs": false,
    // 是否检查js语法是否符合规范,默认是false
    "checkJs": false,
    // 注释是否编译到js文件,默认false
    "removeComments": false,
    // 不生成编译后的文件
    "noEmit": false,
    // 有错误不生成编译文件
    "noEmitOnError": false,
    // 编译严格模式
    "alwaysStrict": true,
    // 不允许掩式any
    "noImplicitAny": true,
    // 不允许不明确的类型this
    "noImplicitThis": false,
    // 检查空值
    "strictNullChecks": true,
    
  },
  // 包含的目录
  "include": ["./src/**/*.ts"],
  // 排除文件
  "exclude": []
}
# webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  CleanWebpackPlugin: CleanWebpackPlugins,
} = require("clean-webpack-plugin");
// console.dir(CleanWebpackPlugins, "pl");
// webpack配置
module.exports = {
  // 模式
  mode: "production",
  // 入口
  entry: "./src/main.ts",
  // 出口
  output: {
    // 出口路径   path.resolve拼接绝对路径
    path: path.resolve(__dirname, "dist"),
    // 出口文件名
    filename: "bundle.js",
    // 配置打包不适用箭头函数
    environment:{
      arrowFunction:false
    }
  },
  // 指定webpack打包时要使用模块
  module: {
    // 指定规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 使用loader从后向前执行
        use: [{
          // 指定加载器
          loader:'babel-loader',
          options:{
             // 设置定义环境
            presets:[
              [
                '@babel/preset-env',{
                  // 兼容目标浏览器
                  targets:{
                    "chrome":'88'
                  },
                  // js运行环境
                  "corejs":'3'
                  // 使用core.js方式
                  ,"useBuiltIns":'usage'
                }
              ]
            ]
          }
        },"ts-loader"],
        // 排除文件
        exclude: /node-modules/,
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
    extensions: [".ts", ".js"],
  },
};



# gihub token认证
settings ---\> Developer settings---\>Personal access tokens---\>generate a personal access token ---\>repo admin:org admin:public_key admin:repo_hook admin:org_hook
点击绿色按钮生成token
    


    
