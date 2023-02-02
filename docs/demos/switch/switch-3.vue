<template>
  <div class="margin--every">
    <h-switch
      active-text-color="#ff4949"
      v-model="active1"
      active-text="开启"
      inactive-text="关闭"
    ></h-switch>
    <h-switch
      v-model="active2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="选中背景色#ff4949"
      inactive-text="未选中背景色#ff4949"
    ></h-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const active1 = ref(true)
const active2 = ref(true)
</script>

<style scoped lang="scss">
.margin--every * {
  margin: 5px 5px;
}
</style>
