<template>
    <div class="header">
      <div class="logo">
        <!-- 这里可以放置网站的 Logo -->
        <img src="../../assets/img/logo2.png"  class=logo-img alt="碳源汇反演系统" />
      </div>
      <div class="title">
        <!-- 将标题放在图标旁边 -->
        <h1>黄河三角洲地区碳源汇网络分析系统</h1>
      </div>
      <!-- 这里可以添加其他导航链接、用户登录信息等 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'SiteHeader',
    // 这里可以添加组件的其他逻辑和属性
  }
  </script>
  
  <style scoped>
  /* 优化样式 */
  .header {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: #ecf0f1;
  }
  
  .logo img {
    height: 48px; /* 根据实际情况调整 Logo 的大小 */
 
  }
  
  .title h1 {
    margin-left: 20px;
    font-size: 1.5em;

  }

  .logo {
  overflow: hidden;
  border-radius: 50%; /* 将 Logo 设置为圆形 */
  background-color: #fff;

 
}
 
  </style>
  