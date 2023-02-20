import Drawer from './drawer'
import { mount } from '@vue/test-utils'
describe('----测试drawer组件----', () => {
  it('drawer组件应该存在', () => {
    expect(Drawer).toBeTruthy()
  })
  it('drawer组件应该可以被渲染', () => {
    const wrapper = mount(Drawer)
    expect(wrapper.classes()).toContain('h-drawer')
  })
})
