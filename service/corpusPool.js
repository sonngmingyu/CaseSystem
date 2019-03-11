import axios from '../../../../../service/http'

// 获取语料池信息
const getcorpusPoolData = params => { return axios.get(`/bjyydx/corporafile/originalfile?${params}`).then(res => res) }
// 获取自己上传的语料信息
const getCorpusByMyself = params => { return axios.get(`/corpora/corp/index/getMyFileList?${params}`).then(res => res) }
// 获取提取的预料池信息
const getextractTableData = params => { return axios.get(`/bjyydx/corporafile/myoriginalfile?${params}`).then(res => res) }
// 提取语料接口
const extract = params => { return axios.put(`/bjyydx/yllr`, params).then(res => res.data) }
// 已录入语料信息
const corpusEntered = params => { return axios.get(`/bjyydx/yllr/getMyComplete?${params}`).then(res => res) }
// 获取总字数
const getUserFontTotal = params => { return axios.get(`/bjyydx/yllr/getTotalContent/${params}`).then(res => res.data) }
// 语料录入
// const corpusUploadFun = params => { return axios.post(`/bjyydx/corporafile`, params).then(res => res.data) }
export {getcorpusPoolData, getCorpusByMyself, getextractTableData, corpusEntered, extract, getUserFontTotal}
