<template>
  <div class="margin--every">
    <h-alert type="success" title="成功提示信息"></h-alert>
    <h-alert type="warning" title="警告提示信息" close></h-alert>
    <h-alert type="info" title="普通提示信息" close-text="关闭"></h-alert>
    <h-alert type="error" title="错误提示信息" close-text="知道了"></h-alert>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.margin--every * {
  margin: 5px 5px;
}
</style>
