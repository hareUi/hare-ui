import Empty from './empty'
import { render } from '@testing-library/vue'
describe('empty组件初始化----', () => {
  it('empty组件应该存在', () => {
    expect(Empty).toBeTruthy()
  })
  it('empty组件应该可以被渲染', () => {
    const wrapper = render(Empty)
  })
})
