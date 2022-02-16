<template>
  <Form @submit="onSubmit">
    <CellGroup inset>
      <Field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </CellGroup>
    <div style="margin: 16px">
      <Button round block type="primary" native-type="submit">登录</Button>
    </div>
  </Form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Form, Field, CellGroup, Button } from 'vant'
import { useStore } from 'vuex'

@Options({
  components: {
    Form,
    Field,
    CellGroup,
    Button,
  },
})
export default class Home extends Vue {
  username = ''
  password = ''
  store = null
  mounted(): void {
    this.store = useStore()
    // this.store.commit('test/ADD_USER', { name: 122 })
    //
  }
  onSubmit(values: { username: string; password: string }): void {
    this.store.dispatch('Login', values)
  }
}
</script>
