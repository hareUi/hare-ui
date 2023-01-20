<template>
  <div class="margin--every">
    <h-alert type="success" title="成功提示信息" close description="这是一则警告的辅助性说明文字"></h-alert>
    <h-alert type="warning" title="警告提示信息" description="这是一则警告的辅助性说明文字"></h-alert>
    <h-alert type="info" title="普通提示信息" icon description="这是一则含icon的警告的辅助性说明文字"></h-alert>
    <h-alert type="error" title="错误提示信息" close-text="知道了" description="这是一则警告的辅助性说明文字"></h-alert>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.margin--every * {
  margin: 5px 5px;
}
</style>
