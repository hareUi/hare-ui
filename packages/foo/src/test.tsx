// 1.函数式组件
// export default () => <div>test</div>

import { defineComponent, ref, withModifiers } from 'vue'
// 2.defineComponent
// export default defineComponent({
//   render() {
//     return <div>test</div>
//   }
// })

// 3.defineComponent({setup(){}})
// 摒弃this，对ts支持最好
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  setup(props, ctx) {
    const count = ref(0)
    const inc = () => {
      count.value++
    }
    return () => {
      const flag = ref(true)
      const span = flag ? <span>A</span> : <span>B</span>
      return (
        <div class=" underline" onClick={withModifiers(inc, ['self'])}>
          test:{count.value}
          <input type="text" v-focus v-model={count.value}></input>
          <div onClick={() => (flag.value = !flag.value)}>{span}</div>
        </div>
      )
    }
  }
})
