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
    
# 面向对象
操作对象 three.js 难的是对象的封装对对象的一些操作js是一个基与原型继承，构造对象的语言
# 实例和静态
static静态定义 实例直接写
继承 和 重写方法 
super相当于父类

# 接口和类型别名的区别和相同点

接口可以声明两次 type不能
相同：
都可以去定义对象的结构
# 定义类使用接口规范
接口是个什么东西：接口定义一个规范去生成满足规范的对象
interface myterface {
  name:string;
  sayHello():void;
}
class Zou implements myterface{
  name:string='1';
  sayHello(): void {
    
  }
}
# 对属性做限制的修饰符
public 可以在任意位置访问 默认
private 私有属性只能在类的内部进行修改
protected 可以在子类去使用
readonly 只读
static 静态属性
get set 定义一个private的属性外部不能访问可以用get 和set去读写属性的值，如果采用public直接定义一个属性确实可以直接去读取和设置当是丢失了控制权
# 泛型
# css插件
