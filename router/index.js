// 此处写corpus的分支路由信息
const business = r => require.ensure([], () => r(require('../App')), 'business')
// 用户使用说明文件
const useExplain = r => require.ensure([], () => r(require('../modules/useExplain/useExplain')), 'useExplain')
const modulePath = '/business'
const businessRoutes = {
  path: `${modulePath}`,
  name: 'business',
  component: business,
  children: [
    {
      path: 'useExplain',
      component: useExplain
    }
  ]
}
export default businessRoutes
