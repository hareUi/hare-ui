import { defineComponent } from 'vue'
export default defineComponent({
  name: 'dp-row-footer',
  emits: ['pickToday'],
  setup(props, { emit }) {
    const pickToday = () => {
      emit('pickToday')
    }
    return () => {
      return (
        <div class="hare-datepicker__row__footer" onClick={pickToday}>
          <span>今天</span>
        </div>
      )
    }
  }
})
