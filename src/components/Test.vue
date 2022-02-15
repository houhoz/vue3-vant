<template>
  <div class="hello">
    <span>{{ count }}</span>
    <Button class="btn" @click="increase">增加</Button>
    <Empty image="network" description="Test组件" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUpdated, onUnmounted } from 'vue'
import { Empty, Button } from 'vant'
import { fetchUserInfo } from '@/api/user'

export default defineComponent({
  name: 'hello world',
  props: {},
  components: {
    Empty,
    Button,
  },
  setup() {
    const count = ref(0)
    const increase = (): void => {
      count.value++
    }
    // 生命周期
    onMounted(() => {
      fetchUserInfo()
      console.log('mounted vue3 typescript')
    })
    onUpdated(() => {
      console.log('updated vue3 typescript')
    })
    onUnmounted(() => {
      console.log('onUnmounted vue3 typescript')
    })
    // 暴露给模板
    return {
      count,
      increase,
    }
  },
})
</script>

<style scoped lang="less">
.btn {
  width: 100px;
}
</style>
