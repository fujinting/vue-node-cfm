# vue-node-cfm
使用vue+node+mongodb制作的全套cfm移动端网站

### 1.运行
1.运行移动端npm run serve

2.运行服务器 nodemon server

3.运行后台管理界面 npm run serve 

4.运行小程序端 开发者工具直接运行


### 2.所用技术
1.服务器：使用nodejs搭建，运用express框架，mongoose连接数据库，cors防止跨域，bcrypt密码加密，inflection，multer，webtoken，http-assert等插件。

2.后台管理系统：由vue全家桶(脚手架3)及响应式框架elementUI组成，使用vue2-editor等插件。

3.h5移动端界面：vueRouter + vue-cli3 + vuex + axios + sass等，使用了dayjs，swiper，vue-video-player，timeago.js等小插件。

4.小程序端：与h5移动端使用的相同接口，没有使用框架且还没有完成。
