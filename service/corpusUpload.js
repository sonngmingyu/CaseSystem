import axios from '../../../../../service/http'

// 获取文件信息
const getFiles = params => { return axios.post(`/portal/attachments?m=get`, params).then(res => res.data) }

// 文件上传
const uploadFile = params => { return axios.post(`/bjyydx/fileupload`, params.data).then(res => res.data) }
// 语料录入
const corpusUploadFun = params => { return axios.post(`/bjyydx/corporafile`, params).then(res => res) }
export {getFiles, uploadFile, corpusUploadFun}
