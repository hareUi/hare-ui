<template>
  <h-card  class="my-card">
   <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
    </div>
  </h-card>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
.my-card{
  width: 400px;
  height: 200px;
}
</style>
