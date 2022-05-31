{
  "name": "html",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    /** babel核心包**/
    "@babel/core": "^7.18.0",
    // babel打包根据环境打包不同的东西
    "@babel/preset-env": "^7.18.0",
    //babel-loader把babel和webpack结合
    "babel-loader": "^8.2.5",
    // 清除dist
    "clean-webpack-plugin": "^4.0.0",
    // 模拟js运行环境
    "core.js": "^0.4.2",
    // 打包成html
    "html-webpack-plugin": "^5.5.0",
    // ts-load把ts和webpack结合
    "ts-loader": "^9.2.8",
    // ts
    "typescript": "^4.6.3",
    "webpack": "^5.72.0",
    "webpack-cli": "^4.9.2",
    "webpack-dev-server": "^4.9.0"
  },
  "dependencies": {}
}
<!-- 

gihub token认证
settings ---\> Developer settings---\>Personal access tokens---\>generate a personal access token ---\>repo admin:org admin:public_key admin:repo_hook admin:org_hook
点击绿色按钮生成token
    
-->

    
