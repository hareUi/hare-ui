import Mock from 'mockjs'

export const normalTableData = Mock.mock({
  'list|20': [
    {
      date: '@date("yyyy-MM-dd")',
      name: '@FIRST',
      address: '@city',
      phone: /^1(5|3|7|8)[0-9]{9}$/,
      email: '@email',
      ip: '@ip',
      key: '@increment()'
    }
  ]
})

export const bigTableData = Mock.mock({
  'list|1000': [
    {
      date: '@date("yyyy-MM-dd")',
      name: '@FIRST',
      address: '@city',
      phone: /^1(5|3|7|8)[0-9]{9}$/,
      email: '@email',
      ip: '@ip',
      key: '@increment()'
    }
  ]
})
