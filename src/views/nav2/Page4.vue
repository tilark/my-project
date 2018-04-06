<template>
  <div>
    <h1>这是Page4，用于vuex 测试</h1>
    <h3>id is {{$route.params.id}}</h3>
    <h3>userName is {{$route.params.userName}}</h3>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    
  }
</script>