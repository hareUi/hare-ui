import Row from './row'
import { mount } from '@vue/test-utils'
describe('----测试row组件----', () => {
  it('row组件应该存在', () => {
    expect(Row).toBeTruthy()
  })
  it('row组件应该可以被渲染', () => {
    const wrapper = mount(Row)
    expect(wrapper.classes()).toContain('h-row')
  })
})
