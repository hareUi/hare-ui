<template>
  <h-button variant="solid" color="primary" @click="showDrawer">Click Me</h-button>
  <h-drawer v-model="visible" style="padding: 20px;">Hello Drawer</h-drawer>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const showDrawer = () => (visible.value = true)

    return { visible, showDrawer }
  }
})
</script>
