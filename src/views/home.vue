<template>
  <div class="heande">
    <el-container>
      <el-header class="hendle">
        <div class="pru">
          <img src="../assets/12.png" alt="">
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">个人中心</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">
            <a href="https://www.ele.me" target="_blank">订单管理</a>
          </el-menu-item>
        </el-menu>
      </el-header>
      <div class="Exit">
        <el-button type="info">退出</el-button>
      </div>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
        
             
                 <el-menu-item index="1-4-1">
                    <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
        
                 </el-menu-item>

                     
                 <el-menu-item index="1-4-1">
                    <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
        
                 </el-menu-item>
                     
                 <el-menu-item index="1-4-1">
                    <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
        
                 </el-menu-item>
                     
                 <el-menu-item index="1-4-1">
                    <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
        
                 </el-menu-item>

                       <el-menu-item index="1-4-1">
                    <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
        
                 </el-menu-item>
                 

                 

                 
                 
            </el-submenu>
    
          </el-menu>
        </el-aside>
        <el-main>内容</el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #6f8175;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  // text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container {
  position: relative;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.hendle {
  display: flex;
  padding: 0px;
}
.el-menu {
  //   padding-left: 50px;
  background-color: #6f8175;
}

.pru {
  width: 60px;
  height: 60px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.el-button {
  position: absolute;
  top: 10px;
  right: 30px;
}
.el-menu--horizontal > .el-menu-item {
  color: #000;
}
.hendle .el-menu--horizontal > .el-submenu .el-submenu__title {
  color: #000;
}
</style>



