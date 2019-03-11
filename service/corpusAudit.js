import axios from '../../../../../service/http'

// 获取语料信息
const getCorpusData2 = params => { return axios.get(`/bjyydx/corporafile/corporaextract/${params}`).then(res => res) }
// 保存语料录入信息
const updateCorpusState = params => { return axios.put(`/bjyydx/yllr`, params).then(res => res) }
// 获取录入信息
const getCorpusEnterData = params => { return axios.get(`/bjyydx/corpustag/query/${params}`).then(res => res) }
// 更新录入状态
const updateCorpusEnterState = params => { return axios.put(`/bjyydx/yllr/updateTcorporaFiles`, params).then(res => res) }
export {
    getCorpusData2,
    updateCorpusState,
    getCorpusEnterData,
    updateCorpusEnterState}
