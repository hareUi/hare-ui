<template>
  <h-button variant="solid" color="primary" @click="showDrawer">Click Me</h-button>
  <h-drawer v-model="visible" position="left" style="padding: 20px;">Left Drawer</h-drawer>
</template>
<script>
import { ref } from 'vue'

export default ({
  setup() {
    const visible = ref(false)
    const showDrawer = () => {
      visible.value = true
    }

    return { visible, showDrawer }
  }
})
</script>
