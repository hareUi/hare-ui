import Datepicker from './datepicker'
import { mount } from '@vue/test-utils'
import { getCurrentDaysList } from './dateutils'
import dayjs from 'dayjs/esm/index.js'
describe('----测试dateutils工具类----', () => {
  it('date模式下获取日期列表返回数据应该与实际情况相符', () => {
    const curList = getCurrentDaysList(dayjs().year(), dayjs().month() + 1)
    expect(curList[curList.length - 1] + '').toEqual(
      dayjs().endOf('month').format('D')
    )
  })
})
describe('----测试datepicker组件----', () => {
  it('datepicker组件应该存在', () => {
    expect(Datepicker).toBeTruthy()
  })
  it('datepicker组件应该可以被渲染', () => {
    const wrapper = mount(Datepicker)
    expect(wrapper.classes()).toContain('h-datepicker')
  })
  it('datepicker组件的size属性有效', async () => {
    const size = 'lg'
    const wrapper = mount(Datepicker, {
      props: { size }
    })
    expect(wrapper.classes()).toContain('h-datepicker--lg')
  })
  it('datepicker组件点击下拉有效,并且再次点击可以关闭', async () => {
    const wrapper = mount(Datepicker)
    const dp_wrapper = wrapper.find('input')
    const dp_main = wrapper.find('.h-datepicker__main')
    await dp_wrapper.trigger('click')
    expect(dp_main.classes()).toContain('h-datepicker__main--active')
    await dp_wrapper.trigger('click')
    expect(dp_main.classes()).not.toContain('h-datepicker__main--active')
  })
  it('datepicker组件mode属性有效', async () => {})
})
