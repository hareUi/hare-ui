<template>
  <section class="h-code-box-demo">
    <div class="progress-container">
      <h-progress percentage-text-placement="insideLeft" :percentage="percentage" :percentageText="`${percentage}%`"></h-progress>
    </div>
    <div class="progress-container">
      <h-progress :percentage="percentage" :percentageText="`${percentage}%`"></h-progress>
    </div>
    <div class="progress-container">
      <h-progress percentage-text-placement="insideRight" :percentage="percentage" :percentageText="`${percentage}%`"></h-progress>
    </div>
    <div class="progress-container">
      <h-progress percentage-text-placement="insideBg" :percentage="percentage" :percentageText="`${percentage}%`"></h-progress>
    </div>
    <div class="progress-container">
      <h-progress percentage-text-placement="outside" :percentage="percentage" :percentageText="`${percentage}%`"></h-progress>
    </div>
    <div class="progress-container">
      <d-button @click="minus">减 10%</d-button> <d-button @click="add">增 10%</d-button>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const percentageRef = ref(60)

    const add = () => {
      percentageRef.value += 10
      if (percentageRef.value > 100) {
        percentageRef.value = 0
      }
    }

    const minus = () => {
      percentageRef.value -= 10
      if (percentageRef.value < 0) {
        percentageRef.value = 100
      }
    }

    return {
      percentage: percentageRef,
      add,
      minus
    }
  }
})
</script>
<style>
.progress-container {
  margin-bottom: 20px;
}
.h-code-box-demo {
  border-bottom: 1px dashed #dfe1e6;
  padding: 16px 0;
}
.progress-container {
  margin-bottom: 20px;
}

</style>
