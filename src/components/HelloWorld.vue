<template>
  <div class="hello">
    <Button class="btn">亟待解决</Button>
    <Empty image="network" description="描述文字" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Empty, Button } from 'vant'

@Options({
  props: {
    msg: String,
  },
  components: {
    Button,
    Empty,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.btn {
  width: 100px;
}
</style>
