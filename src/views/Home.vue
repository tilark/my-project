<template>
  <el-row class="container">
 <!-- <el-col>
     <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
     unique-opened router>
     
		 <el-menu-item index="1"><router-link :to="{name:'home'}">首页</router-link> 
     </el-menu-item>
     <el-submenu index="2">
       <template slot="title">导航二</template>
     <el-menu-item index="2-1"> <router-link :to="{name:'page4',params: { id: 123, userName:'linLiu' }}">Page4</router-link>  </el-menu-item>
     <el-menu-item index="2-2"> <router-link :to="{name:'page5'}">Page5</router-link></el-menu-item>
 
     </el-submenu>

   </el-menu>
    </el-col> -->

    <!--使用route递归调用route中的内容进行构建导航栏-->
    <el-col :sapn="24" class="main">
      <el-menu :default-active="$route.path" mode="horizontal" class="el-menu-demo" @open="handleopen" @close="handleClose" @select="handleSelect"
      unique-opened router>    
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <el-submenu :index="index+''" v-if="!item.leaf">
            <template slot="title">
              <i :class="item.iconCls"></i> {{item.name}}
            </template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
            <i :class="item.iconCls"></i>{{item.children[0].name}}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="24">
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
      },
      handleopen(){

      },
      handleClose(){

      }
    }
  }
</script>

<style>
.container {
  	position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
}
</style>
