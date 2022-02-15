<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Test collectionName="姓名" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'

@Options({
  components: {
    HelloWorld,
    Test,
  },
})
export default class Home extends Vue {}
</script>
