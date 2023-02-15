<template>
  <div class="link-container">
    <h-link disabled>default</h-link>
    <h-link type="primary" disabled>primary</h-link>
    <h-link type="success" disabled>success</h-link>
    <h-link type="warning" disabled>warning</h-link>
    <h-link type="danger" target="_blank" href="www.baidu.com" disabled>danger</h-link>
  </div>

</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.link-container *{
  margin: 0 10px;
}
</style>
