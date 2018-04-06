<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!-- <el-menu mode="horizontal">
     <el-menu-item index="1"><router-link to="/home">首页</router-link> 
     </el-menu-item>
     <el-menu-item index="2"><router-link to="/page4">Page4</router-link> </el-menu-item>
     <el-menu-item index="3"><router-link to="/page5">Page5</router-link> </el-menu-item>
   </el-menu> -->
   <router-link to="/home">首页</router-link> 
   <router-link to="/page4">Page4</router-link> 
   <router-link to="/page5">Page5</router-link>
   <div class="content">
       <router-view></router-view>
   </div>
    
  
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
