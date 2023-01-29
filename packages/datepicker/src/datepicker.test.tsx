import Datepicker from './datepicker'
import { render } from '@testing-library/vue'
describe('datepicker组件初始化----', () => {
  it('datepicker组件应该存在', () => {
    expect(Datepicker).toBeTruthy()
  })
  it('datepicker组件应该可以被渲染', () => {
    const wrapper = render(Datepicker)
    // expect(wrapper.findByRole('').exists()).toBe(true)
  })
})
