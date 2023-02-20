import Message from './message'
import { mount } from '@vue/test-utils'
describe('----测试message组件----', () => {
  it('message组件应该存在', () => {
    expect(Message).toBeTruthy()
  })
  it('message组件应该可以被渲染', () => {
    const wrapper = mount(Message)
    expect(wrapper.classes()).toContain('h-message')
  })
})
