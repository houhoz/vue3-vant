<template>
  <router-view />
  <Tabbar route>
    <TabbarItem replace to="/" icon="home-o">首页</TabbarItem>
    <TabbarItem replace to="/about" icon="search">关于</TabbarItem>
  </Tabbar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Tabbar, TabbarItem } from 'vant'

@Options({
  components: {
    Tabbar,
    TabbarItem,
  },
})
export default class App extends Vue {}
</script>

<style lang="less"></style>
