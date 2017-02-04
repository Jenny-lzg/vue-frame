# vue-frame

> 基于vue2.X的选择出行日期的日历组件，带有价格，或者可出行人数显示。
<br>
> 如果想兼容vue1.X 请将`v-else-if` 换成代码块  改成`<templet v-if>`.... 
<br>

## Build Setup

``` bash
# install dependencies(安装依赖)
npm install
# init(初始化)
npm run init
# serve with hot reload at localhost:8081(开发环境)
npm run dev
# build for production with minification(生产环境)
npm run build
```
## Options

# 安装运行开发环境报错：Node Sass could not find a binding for your current environment: Windows 32-bit with Node.js 6.x ……
# 执行下段命令     参考：http://blog.csdn.net/u010116861/article/details/51886550
npm rebuild node-sass 
# 执行上段命令后，再执行npm run dev

Option  | Description
---|---
aroud | 日期范围,如当前日期为2016/12/25 around为3 则显示2016/12 2017/01 2017/02 3个月
click-action | 选择日期之后执行的方法，可接方法名
nums | 日历中如带有剩余人数，或者票价，可向组件传一个数组
select-date | 选择日期高亮




 Create by panwenhua on 16/11/1.
