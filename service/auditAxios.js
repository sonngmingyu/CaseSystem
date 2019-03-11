import axios from '../../../../../service/http'

// 获取待审核语料列表
const getInitCorpusReview = params => { return axios.get(`/bjyydx/corporafile/gettask?${params}`).then(res => res) }
// 获取已审核语料列表
const getInitCorpusAudit = params => { return axios.get(`/bjyydx/corporafile/gethistory?${params}`).then(res => res) }
// 根据id获取语料信息
const getInitCorpus = id => { return axios.get(`/bjyydx/corporafile/${id}`).then(res => res.data) }
// 根据id获取语料审核信息
const getCorpusCommon = (id, token) => { return axios.get(`/bjyydx/comment?fid=${id}&token=${token}`).then(res => res.data) }
// 更新语料状态
const putCorpusStatus = (params, id) => { return axios.put(`/bjyydx/corporafile/${id}`, params).then(res => res.data) }
// 语料审核意见
const postAuditCorpus = params => { return axios.post(`/bjyydx/comment`, params).then(res => res.data) }
// 获取待审批列表
const getCorpusTagPoolData = params => { return axios.get(`/bjyydx/yllr/gettask?${params}`).then(res => res) }
// 获取待审批列表
const getCorpusEnterAudit = params => { return axios.get(`/bjyydx/yllr/gethistory?${params}`).then(res => res) }
// 获取标注待审批列表
const getCorpusTagAudit = params => { return axios.get(`/bjyydx/corpustag/gettask?${params}`).then(res => res) }
// 获取标注待审批列表
const getCorpusTagHistory = params => { return axios.get(`/bjyydx/corpustag/gethistory?${params}`).then(res => res) }
// 查看标注详情
const getTagCorpusById = params => { return axios.get(`/bjyydx/corpustag/queryBy/${params}`).then(res => res.data) }
// 查看标注的原文详情
const getTagCorpusByForid = params => { return axios.get(`/bjyydx/yllr/findById/${params}`).then(res => res.data) }
// 查看两份标注
const getTagInfo = (forId, type) => { return axios.get(`/bjyydx/corpustag/queryByForId/${forId}/${type}`).then(res => res.data) }
// 提交审核纪录
const postCorpusStatus = params => { return axios.post(`/bjyydx/comment/review`, params).then(res => res.data) }
// 提交审核标注
const postCorpusTag = params => { return axios.put(`/bjyydx/corpustag/review`, params).then(res => res.data) }
// 批量审批拒绝语料
const rejectAllCorpus = params => { return axios.put(`/bjyydx/corpustag/reviewTcorporaFiles/refused`, params).then(res => res.data) }
// 批量上传审核记录
const postAllCorpus = params => { return axios.post(`/bjyydx/comment/reviewTcorporaFiles`, params).then(res => res.data) }
export {
    getInitCorpusReview,
    getInitCorpusAudit,
    getInitCorpus,
    getCorpusCommon,
    putCorpusStatus,
    postAuditCorpus,
    getCorpusTagPoolData,
    getCorpusEnterAudit,
    getCorpusTagAudit,
    getCorpusTagHistory,
    getTagCorpusById,
    getTagCorpusByForid,
    getTagInfo,
    postCorpusStatus,
    rejectAllCorpus,
    postCorpusTag,
    postAllCorpus}
