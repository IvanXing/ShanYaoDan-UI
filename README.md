# 山药蛋 - Vue UI 组件

[![Build Status](https://travis-ci.org/IvanXing/ShanYaoDan-UI.svg?branch=master)](https://travis-ci.org/IvanXing/ShanYaoDan-UI)

1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。

  你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式。

2. 安装 shanyaodan
  ```
  npm i --save shanyaodan-test-1
  ```
3. 引入 gulu
  ```
  import {Button, ButtonGroup, Icon} from 'shanyaodan-test-1'
  import 'shanyaodan-test-1/dist/index.css'
  export default {
    name: 'app',
    components: {
      's-button': Button,
      's-icon': Icon
    }
  }
  ```
4. 引入 svg symbols
  ```
  <script src='//at.alicdn.com/t/font_1977626_bijunq4yiza.js'></script>
  ```
