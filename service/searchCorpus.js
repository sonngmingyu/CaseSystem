import axios from '../../../../../service/http'
// 获取信息项设置列表
// 获取字符串搜索结果
const getStringModule = params => { return axios.post(`/index/index/getzfcsample`, params).then(res => res.data) }
// 测试查询是否成功
const showdb = params => { return axios.get(`/index/index/showdb`, params).then(res => res.data) }
// 查询国家接口
const queryCountry = params => { return axios.get('/bjyydx/querycountry').then(res => res) }
// 查询特定条件接口
const getzfc = params => { return axios.post(`/index/index/getzfc`, params).then(res => res.data) }
// 查询语料信息
const geFilesById = params => { return axios.post(`/index/index/geFilesById`, params).then(res => res.data) }
// 查询标注信息
const gebzCorpusById = params => { return axios.post(`/index/index/gebzCorpusById`, params).then(res => res.data) }
// 查询语料信息
const geImageByFid = params => { return axios.post(`/index/index/geImageByFidNoObj`, params).then(res => res.data) }
/**
 * 统计语料的开始  分隔线
 */
// 查询机构接口
const getDepts = params => { return axios.get(`/seed/api/dept/queryDepts`).then(res => res.data) }
export { showdb, getStringModule, queryCountry, getzfc, geFilesById, gebzCorpusById, geImageByFid, getDepts }
