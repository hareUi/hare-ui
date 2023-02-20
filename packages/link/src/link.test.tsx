import Link from './link'
import { mount } from '@vue/test-utils'
describe('----测试link组件----', () => {
  it('link组件应该存在', () => {
    expect(Link).toBeTruthy()
  })
  it('link组件应该可以被渲染', () => {
    const wrapper = mount(Link)
    expect(wrapper.classes()).toContain('h-link')
  })
})
