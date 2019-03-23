// 此处写case的分支路由信息
const CaseSystem = r => require.ensure([], () => r(require('../App')), 'CaseSystem')
// 用户使用说明文件
const useExplain = r => require.ensure([], () => r(require('../modules/useExplain/useExplain')), 'useExplain')
// Case列表
const caseManageList = r => require.ensure([], () => r(require('../modules/demandAndCaseManage/caseManageList')), 'caseManageList')
// 添加case
// const addCaseDialog = r => require.ensure([], () => r(require('../modules/demandAndCaseManage/addCaseDialog')), 'addCaseDialog')
// 公告管理
const ggmanage = r => require.ensure([], () => r(require('../modules/ggmanage/ggmanage')), 'ggmanage')
const modulePath = '/CaseSystem'
const businessRoutes = {
  path: `${modulePath}`,
  name: 'CaseSystem',
  component: CaseSystem,
  children: [
    {
      path: `useExplain`,
      component: useExplain
    },
    {
      path: `caseManageList`,
      component: caseManageList
    },
    {
      path: `ggmanage`,
      component: ggmanage
    }
    // {
    //   path: `addCaseDialog/:paramData`,
    //   name: 'addCaseDialog',
    //   component: addCaseDialog
    // }
  ]
}
export default businessRoutes
