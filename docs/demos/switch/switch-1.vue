<template>
  <div class="margin--every">
    <h-switch
      v-model="active1"
    ></h-switch>
    <h-switch
      width="50px"
      v-model="active2"
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
