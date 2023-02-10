<template>
  <div class="everyMargin">
    <h-button @click="showMessage('info', '普通消息')" type="primary">普通消息</h-button>
    <h-button @click="showMessage('success', '成功消息')" type="info">成功消息</h-button>
    <h-button @click="showMessage('warning', '警告消息')" type="warning">警告消息</h-button>
    <h-button @click="showMessage('danger', '危险消息')" type="error">危险消息</h-button>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@hare-ui/hare-ui'
function showMessage(type, message) {
  Message({
    center: true,
    type,
    message
  })
}
</script>

<style scoped lang="scss">
.everyMargin *{
  margin: 0 2px;
}
</style>
