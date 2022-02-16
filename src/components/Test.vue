<template>
  <div class="hello">
    <div>{{ userName }}</div>
    <div>{{ age }}</div>
    <Button class="btn" @click="increase">增加</Button>
    <div
      ><span>{{ count }}</span></div
    >
    <Empty image="network" description="Test组件" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  computed,
} from 'vue'
import { Empty, Button } from 'vant'
import { useStore, createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('user')
export default defineComponent({
  name: 'hello world',
  props: {},
  components: {
    Empty,
    Button,
  },
  computed: {
    ...mapState({
      age: state => state,
    }),
  },
  setup() {
    const store = useStore()
    const count = ref(0)
    const userName = computed(() => store.state.user.info.name)

    const increase = (): void => {
      count.value++
    }
    // 生命周期
    onMounted(() => {
      console.log('mounted vue3 typescript')
      store.dispatch('GetInfo')
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
      userName,
    }
  },
})
</script>

<style scoped lang="less">
.btn {
  width: 100px;
}
</style>
