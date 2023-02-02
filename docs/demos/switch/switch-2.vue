<template>
  <div class="margin--every">
    <h-switch
      v-model="active"
      active-text="开启"
      inactive-text="关闭"
    ></h-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const active = ref(true)
</script>

<style scoped lang="scss">
.margin--every * {
  margin: 5px 5px;
}
</style>
