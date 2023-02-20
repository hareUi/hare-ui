<template>
  <h-button variant="solid" color="primary" @click="showDrawer"
    >Click Me</h-button
  >
  <h-drawer v-model="visible" position="left" style="padding: 20px"
    >Left Drawer</h-drawer
  >
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(true)
    const showDrawer = () => {
      console.log(visible.value)
      visible.value = true
      console.log(visible.value)
      return visible.value
    }

    return { visible, showDrawer }
  }
})
</script>
