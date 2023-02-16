import Table from './table'
import { mount } from '@vue/test-utils'
describe('----测试table组件----', () => {
  it('table组件应该存在', () => {
    expect(Table).toBeTruthy()
  })
  it('table组件应该可以被渲染', () => {
    const wrapper = mount(Table)
    expect(wrapper.classes()).toContain('h-table')
  })
})
