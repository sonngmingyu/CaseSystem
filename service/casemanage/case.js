import axios from '../../../../../../service/http'

// 添加case
export const addCase = params => { return axios.post(`/team/Index/addcase`, params).then(res => res) }
// case集合查询
export const queryCaeList = params => { return axios.post(`/team/Index/getcase`, params).then(res => res) }
// 修改case信息
export const editCase = params => { return axios.post(`/team/Index/updatecase`, params).then(res => res) }
// 通过id查询case
export const queryByCid = params => { return axios.post(`/team/Index/getfileforcaseid`, params).then(res => res) }
// 上传附件
export const uploadFile = params => { return axios.post(`/team/Index/uploadfile`, params).then(res => res) }
// 模糊查询case
export const queryCaseStr = params => { return axios.post(`/team/Index/getcaselike`, params).then(res => res) }
