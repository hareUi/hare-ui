import Divider from './divider'
import { mount } from '@vue/test-utils'
describe('----测试divider组件----', () => {
  it('divider组件应该存在', () => {
    expect(Divider).toBeTruthy()
  })
  it('divider组件应该可以被渲染', () => {
    const wrapper = mount(Divider)
    expect(wrapper.classes()).toContain('h-divider')
  })
})
