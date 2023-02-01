import Datepicker from './datepicker'
import { mount } from '@vue/test-utils'
describe('----测试datepicker组件----', () => {
  it('datepicker组件应该存在', () => {
    expect(Datepicker).toBeTruthy()
  })
  it('datepicker组件应该可以被渲染', () => {
    const wrapper = mount(Datepicker)
    expect(wrapper.classes()).toContain('h-datepicker')
  })
  it('datepicker组件的size属性有效', async () => {
    const size = 'lg'
    const wrapper = mount(Datepicker, {
      props: { size }
    })
    expect(wrapper.classes()).toContain('h-datepicker--lg')
  })
  it('datepicker组件点击下拉有效,并且再次点击可以关闭', async () => {
    const wrapper = mount(Datepicker)
    const dp_wrapper = wrapper.find('input')
    const dp_main = wrapper.find('.h-datepicker__main')
    await dp_wrapper.trigger('click')
    expect(dp_main.classes()).toContain('h-datepicker__main--active')
    await dp_wrapper.trigger('click')
    expect(dp_main.classes()).not.toContain('h-datepicker__main--active')
  })
  it('datepicker组件mode属性有效', async () => {})
})
