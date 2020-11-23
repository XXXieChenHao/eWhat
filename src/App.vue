<template>
  <div id="app">
    <Layout v-if="$route.meta.keepAlive" />
		<router-view v-else />
  </div>
</template>

<script>
import Layout from './components/layout/index'
  export default {
    components: {
      Layout
    },
    mounted() {
      console.log(this.$route.meta)
    }
  }
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
