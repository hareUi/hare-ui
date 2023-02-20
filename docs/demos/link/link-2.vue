<template>
  <div class="link-container">
    <h-link :underline="false">Without Underline</h-link>
    <h-link>With Underline</h-link>
  </div>

</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.link-container *{
  margin: 0 10px;
}
</style>
