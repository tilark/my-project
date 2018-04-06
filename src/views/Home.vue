<template>
  <el-row>
 <el-col>
     <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
     
		 <el-menu-item index="1"><router-link :to="{name:'home'}">首页</router-link> 
     </el-menu-item>
     <el-submenu index="2">
       <template slot="title">导航二</template>
     <el-menu-item index="2-1"> <router-link :to="{name:'page4',params: { id: 123, userName:'linLiu' }}">Page4</router-link>  </el-menu-item>
     <el-menu-item index="2-2"> <router-link :to="{name:'page5'}">Page5</router-link></el-menu-item>
 
     </el-submenu>

   </el-menu>
    </el-col>
    <el-col>
    <div>
        <span>这是首页</span>
        <transition name="fade" mode="out-in"><router-view></router-view></transition>
    </div>
    </el-col>
  </el-row>

</template>

<script>
  export default{
   
    data(){
      return {
        activeIndex:'1'        
      };
    },
    methods:{
      handleSelect(key, keyPath){
        // console.log(key, keyPath);
      }
    }
  }
</script>