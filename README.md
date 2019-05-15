# 目标
准备开一个SVG3D的项目，将SVG转换为可用的JSON数据

# 架构
* SVG转换器：将各种SVG图形（包括Adobe Illustrator）转换为JSON格式的数据
* SVG在线编辑器：用命令模式架构，要求实时编辑SVG图形，并可以加载、输出JSON和SVG格式的数据

# 细节
* 实现一个类VUE的MVVM架构的双向绑定，用于实时更新
* 实现简单AJAX类
* SVG标准化处理
* GZIP压缩优化网络加载

# 技术栈
* SVG
* Three.js
* 数据库选型