<template>
  <h-form
    style="width: 50%"
    :model="model"
    :rules="rules"
    layout="vertical"
    labelSize="sm"
    labelAlign="center"
    @submit="onSubmit"
    ref="loginForm"
  >
    <h-form-item label="用户名" field="username">
      <h-input v-model="model.username" type="text">
        <template #prefix>
          <h-icon name="vue"></h-icon>
        </template>
      </h-input>
    </h-form-item>
    <h-form-item label="密码" field="password">
      <h-input v-model="model.password" size="small" type="password" />
    </h-form-item>
    <h-form-item>
      <h-button type="primary">登录</h-button>
    </h-form-item>
  </h-form>
  <h-input placeholder="disabled input" disabled size="small"></h-input>
  <h-menu :defaultIndex="'a'">
    <h-menu-item index="a">123</h-menu-item>
    <h-menu-item index="b">123</h-menu-item>
    <h-menu-item index="c">123</h-menu-item>
  </h-menu>
  <h-alert>123</h-alert>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const model = ref({
  username: '张三',
  password: '123456'
})
const rules = ref({
  username: [{ required: true, message: '用户名不能为空' }],
  password: [
    { required: true, message: '密码不能为空' },
    { min: 6, max: 10, message: '密码长度在6-10之间' }
  ]
})
const loginForm = ref()
const onSubmit = () => {
  loginForm.value.validate((valid: Boolean) => {
    if (valid) {
      alert('登录成功')
    } else {
      alert('校验失败')
    }
  })
}
</script>

<style scoped lang="scss"></style>
