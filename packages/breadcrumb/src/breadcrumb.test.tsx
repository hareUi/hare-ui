import Breadcrumb from './breadcrumb'
import { mount } from '@vue/test-utils'
describe('----测试breadcrumb组件----', () => {
  it('breadcrumb组件应该存在', () => {
    expect(Breadcrumb).toBeTruthy()
  })
  it('breadcrumb组件应该可以被渲染', () => {
    const wrapper = mount(Breadcrumb)
    expect(wrapper.classes()).toContain('h-breadcrumb')
  })
})
