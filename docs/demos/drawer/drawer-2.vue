<template>
  <h-button variant="solid" color="primary" @click="showDrawer">Click Me</h-button>
  <h-drawer v-model="visible" position="left" style="padding: 20px;">Left Drawer</h-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const showDrawer = () => {
      console.log('lala')
    }

    return { visible, showDrawer }
  }
})
</script>
