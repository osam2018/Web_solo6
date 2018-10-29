<template>
<!--비동기형 메뉴-->
      <el-container id="app">
          <el-header class="header">
              <div id="nav">
                  <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                  id="el-menu-background">
                      <el-menu-item index="home" class="el-menu-item">메인</el-menu-item>
                      <el-menu-item index="about" class="el-menu-item">생활관현황</el-menu-item>
                      <el-menu-item index="datapage" class="el-menu-item">중대평균</el-menu-item>
                      <el-menu-item index="sidepage" class="el-menu-item">관리모드</el-menu-item>
                  </el-menu>
              </div>
          </el-header>
          <router-view/>
      </el-container>
</template>





<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public activePage:string ="home";
        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }
    }
</script>

<style >
template{
    min-width:600px;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
}

.el-main {
    color: #333;
    text-align: center;
}

body > .el-container {
    margin-bottom: 40px;
}
#el-menu-background{
    background:ghostwhite;

}
.header{
    background:whitesmoke;
}
</style>
