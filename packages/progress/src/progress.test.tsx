import Progress from './progress'
import { mount } from '@vue/test-utils'
describe('----测试progress组件----', () => {
  it('progress组件应该存在', () => {
    expect(Progress).toBeTruthy()
  })
  it('progress组件应该可以被渲染', () => {
    const wrapper = mount(Progress)
    expect(wrapper.classes()).toContain('h-progress')
  })
})
