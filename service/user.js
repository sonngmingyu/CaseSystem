import axios from '../../../../../service/http'

// 获取语料池信息
const getUser = params => { return axios.get(`/seed/api/staff/getStaffInfoByUserid/${params}`).then(res => res.data) }
// 获取提取的预料池信息
const updateUser = params => { return axios.post(`/seed/api/staff/updateEntity`, params).then(res => res.data) }
// 校验密码
const vaildPassword = params => { return axios.post(`/seed/api/login/validPassword`, params).then(res => res.data) }
// 修改密码
const updatePassword = params => { return axios.post(`/seed/api/login/updatePassword`, params).then(res => res) }
const queryCountry = params => { return axios.get('/bjyydx/querycountry').then(res => res) }
export {getUser, updateUser, vaildPassword, updatePassword, queryCountry}
