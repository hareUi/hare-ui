import MessageNode from './messageNode'
import { createVNode, render, VNode } from 'vue'
import { IMessageType } from './types'

interface IMessageOptions {
  // 每弹出一个框给他做一个标记
  id?: string
  message?: string
  type?: IMessageType
  duration?: number
  center?: boolean
  onclose?: () => void
  offset?: number
}

type IMessageParams = IMessageOptions | string

const instances: VNode[] = []

const Message = (options: IMessageParams) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  const userClose = options.onclose
  let offset = options.offset || 20
  instances.forEach(vm => {
    offset += vm.el!.offsetHeight + 20
  })
  const opts = {
    ...options,
    offset,
    onClose: () => {
      // 移除最先消失的message
      instances.shift()
      // 依次向上位移
      for (let i = 0; i < instances.length; i++) {
        // @ts-ignore
        instances[i].component.props.offset -= 40
      }
      userClose?.()
    }
  }
  const container = document.createElement('div')
  const vm = createVNode(MessageNode, opts as any)
  // 销毁实例
  vm.props!.onDestroy = () => {
    render(null, container)
  }
  render(vm, container)
  document.body.appendChild<Element>(container.firstElementChild)
  instances.push(vm)
}
export default Message
