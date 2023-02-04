import Card from './card'
import { mount } from '@vue/test-utils'
describe('----测试card组件----', () => {
  it('card组件应该存在', () => {
    expect(Card).toBeTruthy()
  })
  it('card组件应该可以被渲染', () => {
    const wrapper = mount(Card)
    expect(wrapper.classes()).toContain('h-card')
  })
})
