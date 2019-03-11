import axios from '../../../../../service/http'

// 获取语料信息
const getCorpusData = params => { return axios.get(`/bjyydx/corporafile/${params}`).then(res => res) }
// 获取语料信息
const getCorpusData2 = params => { return axios.get(`/bjyydx/yllr/${params}`).then(res => res) }
// 保存语料录入信息
const saveCorpus = params => { return axios.post(`/bjyydx/yllr`, params).then(res => res) }
// 获取录入信息
const getCorpusEnterData = params => { return axios.get(`/bjyydx/corpustag/query/${params}`).then(res => res) }
export {getCorpusData, getCorpusData2, saveCorpus, getCorpusEnterData}
