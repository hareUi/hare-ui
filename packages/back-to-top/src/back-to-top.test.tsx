import BackToTop from './back-to-top'
import { mount } from '@vue/test-utils'
describe('----测试back-to-top组件----', () => {
  it('back-to-top组件应该存在', () => {
    expect(BackToTop).toBeTruthy()
  })
  it('back-to-top组件应该可以被渲染', () => {
    const wrapper = mount(BackToTop)
    expect(wrapper.classes()).toContain('h-back-to-top')
  })
})
