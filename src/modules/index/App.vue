<template>
  <div id="app">
   <router-view v-if="show"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      show:true
    }
  }
}
</script>
<style>
@import url('~assets/css/reset.css');
@import url('~assets/css/common.css');
</style>
