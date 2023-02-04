import { App } from 'vue'
import Foo from '@hare-ui/foo'
import Button from '@hare-ui/button'
import Icon from '@hare-ui/icon'
import Menu from '@hare-ui/menu'
import MenuItem from '@hare-ui/menu-item'
import Form from '@hare-ui/form'
import FormItem from '@hare-ui/form-item'
import Input from '@hare-ui/input'
import Switch from '@hare-ui/switch'
import Alert from '@hare-ui/alert'
import SubMenu from '@hare-ui/sub-menu'
import Datepicker from '@hare-ui/datepicker'
import Avatar from '@hare-ui/avatar'
import Empty from '@hare-ui/empty'
import Card from '@hare-ui/card'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  Button,
  Icon,
  Menu,
  MenuItem,
  Form,
  FormItem,
  Input,
  Switch,
  Alert,
  SubMenu,
  Datepicker,
  Avatar,
  Empty,
  Card
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
