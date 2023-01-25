import { render, RenderResult } from '@testing-library/vue'
import Menu from './menu'
import { MenuProps } from './types'
import MenuItem from '../../menu-item/index'
import { MenuItemProps } from '../../menu-item/src/types'
import { vitest } from 'vitest'

const testProps: MenuProps = {
  defaultIndex: 'a',
  onSelect: vitest.fn(),
  mode: 'vertical'
}
const testVerticalProps: MenuProps = {
  defaultIndex: 'a',
  onSelect: vitest.fn(),
  mode: 'horizontal'
}
const testMenu = props => {
  return (
    <h-menu>
      <h-menu-item index={'a'}>active</h-menu-item>
      <h-menu-item index={'b'}>hare</h-menu-item>
      <h-menu-item index={'c'} disabled>
        disabled
      </h-menu-item>
    </h-menu>
  )
}
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement
describe('test menu an menu-item component', () => {
  beforeEach(() => {
    // wrapper = render(testMenu(testProps))
    // menuElement = wrapper.getByTestId('menu')
    // activeElement = wrapper.getByText('active')
    // disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem based on default props', () => {
    // expect(menuElement).toBe()
  })
  it('click items should change active and call the right callback', () => {})
  it('should render vertical mode when mode is set to vertical', () => {})
})
