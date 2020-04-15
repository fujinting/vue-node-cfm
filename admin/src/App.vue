<template>
  <div id="app">
      <router-view :key="$router.path">
        
      </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
  html,body{
  margin: 0;
  padding: 0;
}
</style>
