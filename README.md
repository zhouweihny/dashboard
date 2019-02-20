# 项目说明

------

### 依赖安装

> * 1，[NodeJs 安装](http://nodejs.cn/)
		+ 运行命令工具，依次输入
    + npm install npm -g
    + npm install cnpm -g --registry=https://registry.npm.taobao.org
    + npm config set registry https://registry.npm.taobao.org
    + //可能需要关闭命令工具并重新打开
> * 2，如果已安装过node，以上可直接跳过
    + cd dashboard（项目所在位置）
		+ cnpm install
		+ cnpm install vuex moment axios qs node-sass --save
		+ cnpm install --save-dev sass-loader style-loader css-loader sass-resources-loader
		+ cnpm install echarts vue-echarts
		+ npm run dev
