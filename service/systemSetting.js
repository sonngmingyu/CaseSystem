import axios from '../../../../service/http'
// 获取信息项设置列表
const getArInfoList = params => { return axios.get(`/fin/arInfo/page?offset=1&limit=1`).then(res => res) }
export { getArInfoList }
