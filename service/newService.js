import axios from '@/service/http'
// 图片文件接口
const uploadFile = params => { return axios.post(`/corp/index/uploadexe`, params).then(res => res.data) }
// 图片文件接口
const corpusUploadFun = params => { return axios.post(`/corp/index/fileupload`, params).then(res => res.data) }
// 获取自己上传的语料信息
const getCorpusByMyself = params => { return axios.post(`/corp/index/getMyFileList`, params).then(res => res) }
// 根据id获取语料信息
const getInitCorpus = id => { return axios.get(`/corp/index/getFileInfo?fileid=${id}`).then(res => res.data) }
// 文件路径
const filePath = () => { return '/corpora/' }
// 获取提取的预料池信息
const getextractTableData = params => { return axios.post(`/corp/index/myoriginalfile`, params).then(res => res) }
// 已录入语料信息
const corpusEntered = params => { return axios.post(`/corp/index/getMyComplete`, params).then(res => res) }
// 获取总字数
const getUserFontTotal = params => { return axios.get(`/corp/index/getTotalContent?token=${params}`).then(res => res.data) }
// 保存语料录入信息
const saveCorpus = params => { return axios.post(`/corp/index/putCorporaText`, params).then(res => res) }
// 获取语料信息
const getCorpusData2 = params => { return axios.get(`/corp/index/getCorporaText?forid=${params}`).then(res => res) }
// 获取提取的标注语料列表
const getCorpusTag = params => { return axios.post(`/corp/index/getMyTcorporaFilesList`, params).then(res => res) }
// 查询已提交的标注语料
const getmyhistoryCorpus = params => { return axios.post(`/corp/index/getmyhistory`, params).then(res => res.data) }
// 获取录入语料池信息
const getcorpusPoolData = params => { return axios.get(`/corp/index/getoriginalfile?${params}`).then(res => res) }
// 录入提取putyllrrelease
const putyllr = params => { return axios.post(`/corp/index/putyllr`, params).then(res => res) }
// 取消录入提取
const putyllrrelease = params => { return axios.post(`/corp/index/putyllrrelease`, params).then(res => res) }
// 获取语料池信息
const getCorpusTagPoolData = params => { return axios.post(`/corp/index/getAccessTowGet`, params).then(res => res) }
// 取消已提取的语料标注
const deleteMyCorpus = params => { return axios.post(`/corp/index/delcorpustag`, params).then(res => res.data) }
// 获取待审核语料列表
const getInitCorpusReview = params => { return axios.post(`/corp/index/gettask`, params).then(res => res) }
// 获取已审核语料列表
const getInitCorpusAudit = params => { return axios.post(`/corp/index/gethistory`, params).then(res => res) }
// 提取语料标注
const jdugeCorpusCheck = params => { return axios.post(`/corp/index/checkTexts`, params).then(res => res.data) }
// 获取标注
const getCorpusTagData = params => { return axios.get(`/corp/index/corpustagByID?${params}`).then(res => res.data) }
// 保存标注的语料
const saveTagCorpus = params => { return axios.post(`/corp/index/putcorpustag`, params).then(res => res.data) }
// 获取录入待审批列表
const ylshGettask = params => { return axios.post(`/corp/index/ylsh_gettask`, params).then(res => res) }
// 获取录入已审批列表
const ylshGetHistory = params => { return axios.post(`/corp/index/ylsh_gethistory`, params).then(res => res) }
// 语料标注审核
const putCorpusStatus = params => { return axios.post(`/corp/index/corporafile`, params).then(res => res.data) }
// 根据id获取语料审核信息
const getCorpusCommon = (id, token) => { return axios.get(`/corp/index/comment?fid=${id}&token=${token}`).then(res => res.data) }
// 录入审核时获取界面信息接口
const getCorpusEnterAudit = (params) => { return axios.post(`/corp/index/gettextinfo`, params).then(res => res.data) }
// 录入审核时获取界面信息接口
const updateCorpusEnterState = (params) => { return axios.post(`/corp/index/updateTcorporaFiles`, params).then(res => res.data) }
// 标注审核未审核列表接口
const getCorpusTagAudit = params => { return axios.post(`/corp/index/getcorpustagtask`, params).then(res => res.data) }
// 标注审核未审核列表接口
const getCorpusTagHistory = params => { return axios.post(`/corp/index/getcorpustagHistory`, params).then(res => res.data) }
// 标注审核页面获取数据接口
const getextractInfoToFid = params => { return axios.post(`/corp/index/getextractInfoToFid`, params).then(res => res.data) }
// 标注审核列表页面 批量回退
const rejectAllCorpus = params => { return axios.post(`/corp/index/reviewTcorporaFiles`, params).then(res => res.data) }
// 标注审核审批接口
const checkCorporaExtract = params => { return axios.post(`/corp/index/checkCorporaExtract`, params).then(res => res.data) }
export {
    uploadFile,
    corpusUploadFun,
    getCorpusByMyself,
    getInitCorpus,
    filePath,
    getextractTableData,
    corpusEntered,
    getUserFontTotal,
    saveCorpus,
    getCorpusData2,
    getCorpusTag,
    getmyhistoryCorpus,
    getcorpusPoolData,
    putyllr,
    putyllrrelease,
    getCorpusTagPoolData,
    deleteMyCorpus,
    getInitCorpusReview,
    getInitCorpusAudit,
    jdugeCorpusCheck,
    getCorpusTagData,
    saveTagCorpus,
    ylshGettask,
    ylshGetHistory,
    putCorpusStatus,
    getCorpusCommon,
    getCorpusEnterAudit,
    updateCorpusEnterState,
    getCorpusTagAudit,
    getCorpusTagHistory,
    getextractInfoToFid,
    rejectAllCorpus,
    checkCorporaExtract
}
