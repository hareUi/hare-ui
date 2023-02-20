import { App } from 'vue'
import Foo from '@hare-ui/foo'
import Button from '@hare-ui/button'
import Icon from '@hare-ui/icon'
import { Menu, MenuItem, SubMenu } from '@hare-ui/menu'
// import MenuItem from '@hare-ui/menu-item'
import Form from '@hare-ui/form'
import FormItem from '@hare-ui/form-item'
import Input from '@hare-ui/input'
import Switch from '@hare-ui/switch'
import Alert from '@hare-ui/alert'
import Datepicker from '@hare-ui/datepicker'
import Avatar from '@hare-ui/avatar'
import Empty from '@hare-ui/empty'
import Card from '@hare-ui/card'
import Progress from '@hare-ui/progress'
import Row from '@hare-ui/row'
import Col from '@hare-ui/col'
import Message from '@hare-ui/message'
import Link from '@hare-ui/link'
import Table from '@hare-ui/table'
import BackToTop from '@hare-ui/back-to-top'
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
  Card,
  Progress,
  Row,
  Col,
  Message,
  Link,
  Table,
  BackToTop
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export { Message }

export default {
  install
}
