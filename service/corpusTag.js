import axios from '../../../../../service/http'

// 获取语料池信息
const getCorpusTagPoolData = params => { return axios.get(`/bjyydx/yllr?${params}`).then(res => res) }
// 获取提取的预料池信息
const getextractTableData = params => { return axios.get(`/bjyydx/corporafile?${params}`).then(res => res) }
// 提取语料接口
const extract = params => { return axios.get(`/bjyydx/corpustag/${params}`).then(res => res.data) }
// 获取提取的标注语料列表
const getCorpusTag = params => { return axios.get(`/bjyydx/querycorpustag/getMyTcorporaFilesList?${params}`).then(res => res) }
// 获取总字数
const getCorpusTagData = params => { return axios.get(`/bjyydx/corpustag/${params}`).then(res => res.data) }
// 判断是否可以提取
const jdugeCorpusCheck = params => { return axios.get(`/bjyydx/corpustag/check/${params}`).then(res => res.data) }
// 保存标注的语料
const saveTagCorpus = params => { return axios.put(`/bjyydx/corpustag`, params).then(res => res.data) }
// 查询标注的语料的暂存信息
const searchCorpusInfo = id => { return axios.get(`/bjyydx/corpustag/queryBy/${id}`).then(res => res.data) }
// 查询已提交的语料
const getmyhistoryCorpus = id => { return axios.get(`/bjyydx/corpustag/getmyhistory?${id}`).then(res => res.data) }
// 取消已提取的语料
const deleteMyCorpus = id => { return axios.delete(`/bjyydx/corpustag/${id}`).then(res => res.data) }
// 查询语料是否可被提取
const getAccess = idArr => { return axios.post(`/bjyydx/corpustag/getaccess`, idArr).then(res => res.data) }
// 语料代码
const corpusCode = {
  bd: [
    {
      key: '[Bd]',
      value: '标点多余'
    },
    {
      key: '[Bq]',
      value: '标点缺失'
    },
    {
      key: '[Bcy]',
      value: '标点用错'
    },
    {
      key: '[Bcx]',
      value: '标点形错'
    },
    {
      key: '[Bx]',
      value: '标点错序'
    },
    {
      key: '[B?]',
      value: '标点偏误存疑'
    }
  ],
  zi: [
    {
      key: '[Zc]',
      value: '错字'
    },
    {
      key: '[Zb]',
      value: '别字'
    },
    {
      key: '[Zf]',
      value: '繁体字'
    },
    {
      key: '[Zy]',
      value: '异体字'
    },
    {
      key: '[Zp]',
      value: '拼音字'
    },
    {
      key: '[Zl]',
      value: '拆分字'
    },
    {
      key: '[Zd]',
      value: '多字'
    },
    {
      key: '[Zq]',
      value: '缺字（构词成分不全）'
    },
    {
      key: '[Z?]',
      value: '字存疑'
    }
  ],
  ci: [
    {
      key: '[Cb]',
      value: '词语误用'
    },
    {
      key: '[Cbq]',
      value: '构词成分不全（缺字）'
    },
    {
      key: '[Cx]',
      value: '错序词'
    },
    {
      key: '[Cz]',
      value: '生造词'
    },
    {
      key: '[Cw]',
      value: '外文词'
    },
    {
      key: '[Cl]',
      value: '离合词'
    },
    {
      key: '[Cdj]',
      value: '同义叠加'
    },
    {
      key: '[Cq]',
      value: '缺词'
    },
    {
      key: '[Cd]',
      value: '多词'
    },
    {
      key: '[C?]',
      value: '偏误存疑'
    }
  ],
  dy: [
    {
      key: '[CZzw]',
      value: '主谓结构偏误'
    },
    {
      key: '[CZlh]',
      value: '联合结构偏误'
    },
    {
      key: '[CZdz]',
      value: '定中结构偏误'
    },
    {
      key: '[CZzz]',
      value: '状中结构偏误'
    },
    {
      key: '[CZsb]',
      value: '述宾结构偏误'
    },
    {
      key: '[CZsbu]',
      value: '述补结构偏误'
    },
    {
      key: '[CZsl]',
      value: '数量结构偏误'
    },
    {
      key: '[CZtw]',
      value: '同位结构偏误'
    },
    {
      key: '[CZld]',
      value: '连动结构偏误'
    },
    {
      key: '[CZjy]',
      value: '兼语结构偏误'
    },
    {
      key: '[CZcd]',
      value: '重叠结构偏误'
    },
    {
      key: '[CZfw]',
      value: '方位结构偏误'
    },
    {
      key: '[CZjb]',
      value: '介宾结构偏误'
    },
    {
      key: '[CZyj]',
      value: '音节搭配偏误'
    },
    {
      key: '[CZgd]',
      value: '固定短语偏误'
    },
    {
      key: '[C？]',
      value: '偏误存疑'
    }
  ],
  js: [
    {
      value: 'zjsj',
      label: '正确句式',
      children: [
        {
          value: '{JSjy}',
          label: '兼语句标记'
        },
        {
          value: '{JSbd}',
          label: '被动句标记'
        },
        // 把字句{JSba}
        // 被字句{JSbz}
        // 比字句{JSbi}
        // 连字句{JSlz}
        // 有字句{JSy}
        // 是字句{JSs}
        {
          value: '{JSba}',
          label: '把字句标记'
        },
        {
          value: '{JSbz}',
          label: '被字句标记'
        },
        {
          value: '{JSbi}',
          label: '比字句标记'
        },
        {
          value: '{JSlz}',
          label: '连字句标记'
        },
        {
          value: '{JSy}',
          label: '有字句标记'
        },
        {
          value: '{JSs}',
          label: '是字句标记'
        },
        {
          value: '{JSbj}',
          label: '比较句标记'
        },
        {
          value: '{JSsd1}',
          label: '“是......的”（一）句标记'
        },
        {
          value: '{JSsd2}',
          label: '“是......的”（二）句标记'
        },
        {
          value: '{JScx}',
          label: '存现句标记'
        },
        {
          value: '{JSshd}',
          label: '使动句标记'
        },
        {
          value: '{JSld}',
          label: '连动句标记'
        },
        {
          value: '{JSchd}',
          label: '重动句标记'
        },
        {
          value: '{JSshb}',
          label: '双宾语句标记'
        },
        {
          value: '{JSjs}',
          label: '紧缩句标记'
        },
        {
          value: '{JSgd}',
          label: '固定句式标记'
        },
        {
          value: '{JLshf}',
          label: '双重否定句标记'
        },
        {
          value: '{JLfw}',
          label: '反问句标记'
        },
        {
          value: '{JLqs}',
          label: '祈使句标记'
        },
        {
          value: '{JLgt}',
          label: '感叹句标记'
        },
        {
          value: '{JXmw}',
          label: '名词谓语句标记'
        },
        {
          value: '{JXxw}',
          label: '形容词谓语句标记'
        },
        {
          value: '{JXzww}',
          label: '主谓谓语句标记'
        },
        {
          value: '{JXfzw}',
          label: '非主谓句标记'
        }
      ]
    },
    {
      value: 'cwsj',
      label: '错误句式',
      children: [
        {
          value: '[JSba]',
          label: '把字句标记'
        },
        {
          value: '[JSbz]',
          label: '被字句标记'
        },
        {
          value: '[JSbi]',
          label: '比字句标记'
        },
        {
          value: '[JSlz]',
          label: '连字句标记'
        },
        {
          value: '[JSy]',
          label: '有字句标记'
        },
        {
          value: '[JSs]',
          label: '是字句标记'
        },
        {
          value: '[Jx]',
          label: '语序偏误标记'
        },
        {
          value: '[JSzr]',
          label: '句式杂糅标记'
        },
        {
          value: '[Jww]',
          label: '未完句标记'
        },
        {
          value: '[J？]',
          label: '错句存疑标记'
        },
        {
          value: '[JSbd]',
          label: '被动句标记'
        },
        {
          value: '[JSbj]',
          label: '比较句标记'
        },
        {
          value: '[JSsd1]',
          label: '“是......的”（一）句标记'
        },
        {
          value: '[JSsd2]',
          label: '“是......的”（二）句标记'
        },
        {
          value: '[JScx]',
          label: '存现句标记'
        },
        {
          value: '[JSjy]',
          label: '兼语句标记'
        },
        {
          value: '[JSshd]',
          label: '使动句标记'
        },
        {
          value: '[JSld]',
          label: '连动句标记'
        },
        {
          value: '[JSchd]',
          label: '重动句标记'
        },
        {
          value: '[JSshb]',
          label: '双宾语句标记'
        },
        {
          value: '[JSjs]',
          label: '紧缩句标记'
        },
        {
          value: '[JSgd]',
          label: '固定句式标记'
        },
        {
          value: '[JLshf]',
          label: '双重否定句标记'
        },
        {
          value: '[JLfw]',
          label: '反问句标记'
        },
        {
          value: '[JLqs]',
          label: '祈使句标记'
        },
        {
          value: '[JLgt]',
          label: '感叹句标记'
        },
        {
          value: '[JXmw]',
          label: '名词谓语句标记'
        },
        {
          value: '[JXxw]',
          label: '形容词谓语句标记'
        },
        {
          value: '[JXzww]',
          label: '主谓谓语句标记'
        },
        {
          value: '[JXfzw]',
          label: '非主谓句标记'
        }
      ]
    },
    {
      value: 'jzcf',
      label: '句子成分',
      children: [
        {
          value: '[-Jzhuy]',
          label: '主语残缺'
        },
        {
          value: '[+Jzhuy]',
          label: '主语多余'
        },
        {
          value: '[-Jwy]',
          label: '谓语残缺'
        },
        {
          value: '[+Jwy]',
          label: '谓语多余'
        },
        {
          value: '[-Jsy]',
          label: '述语残缺'
        },
        {
          value: '[+Jsy]',
          label: '述语多余'
        },
        {
          value: '[-Jby]',
          label: '宾语残缺'
        },
        {
          value: '[+Jby]',
          label: '宾语多余'
        },
        {
          value: '[-Jbuy]',
          label: '补语残缺'
        },
        {
          value: '[+Jbuy]',
          label: '补语多余'
        },
        {
          value: '[-Jdy]',
          label: '定语残缺'
        },
        {
          value: '[+Jdy]',
          label: '定语多余'
        },
        {
          value: '[-Jzy]',
          label: '状语残缺'
        },
        {
          value: '[+Jzy]',
          label: '状语多余'
        },
        {
          value: '[-Jzxy]',
          label: '中心语残缺'
        },
        {
          value: '[+Jzxy]',
          label: '中心语多余'
        },
        {
          value: '[-J？]',
          label: '句子成分偏误存疑'
        }
      ]
    }
  ],
  js1: [
    {
      key: '[JSba]',
      value: '把字句标记'
    },
    {
      key: '[JSbz]',
      value: '被字句标记'
    },
    {
      key: '[JSbi]',
      value: '比字句标记'
    },
    {
      key: '[JSlz]',
      value: '连字句标记'
    },
    {
      key: '[JSy]',
      value: '有字句标记'
    },
    {
      key: '[JSs]',
      value: '是字句标记'
    },
    {
      key: '[Jx]',
      value: '语序偏误标记'
    },
    {
      key: '[JSzr]',
      value: '句式杂糅标记'
    },
    {
      key: '[Jww]',
      value: '未完句标记'
    },
    {
      key: '[J？]',
      value: '错句存疑标记'
    },
    {
      key: '[JSbd]',
      value: '被动句标记'
    },
    {
      key: '[JSbj]',
      value: '比较句标记'
    },
    {
      key: '[JSsd1]',
      value: '“是......的”（一）句标记'
    },
    {
      key: '[JSsd2]',
      value: '“是......的”（二）句标记'
    },
    {
      key: '[JScx]',
      value: '存现句标记'
    },
    {
      key: '[JSjy]',
      value: '兼语句标记'
    },
    {
      key: '[JSshd]',
      value: '使动句标记'
    },
    {
      key: '[JSld]',
      value: '连动句标记'
    },
    {
      key: '[JSchd]',
      value: '重动句标记'
    },
    {
      key: '[JSshb]',
      value: '双宾语句标记'
    },
    {
      key: '[JSjs]',
      value: '紧缩句标记'
    },
    {
      key: '[JSgd]',
      value: '固定句式标记'
    },
    {
      key: '[JLshf]',
      value: '双重否定句标记'
    },
    {
      key: '[JLfw]',
      value: '反问句标记'
    },
    {
      key: '[JLqs]',
      value: '祈使句标记'
    },
    {
      key: '[JLgt]',
      value: '感叹句标记'
    },
    {
      key: '[JXmw]',
      value: '名词谓语句标记'
    },
    {
      key: '[JXxw]',
      value: '形容词谓语句标记'
    },
    {
      key: '[JXzww]',
      value: '主谓谓语句标记'
    },
    {
      key: '[JXfzw]',
      value: '非主谓句标记'
    },
    {
      key: '{JSjy}',
      value: '兼语句标记'
    },
    {
      key: '{JSbd}',
      value: '被动句标记'
    },
    {
      key: '{JSbj}',
      value: '比较句标记'
    },
    {
      key: '{JSsd1}',
      value: '“是......的”（一）句标记'
    },
    {
      key: '{JSsd2}',
      value: '“是......的”（二）句标记'
    },
    {
      key: '{JScx}',
      value: '存现句标记'
    },
    {
      key: '{JSshd}',
      value: '使动句标记'
    },
    {
      key: '{JSld}',
      value: '连动句标记'
    },
    {
      key: '{JSchd}',
      value: '重动句标记'
    },
    {
      key: '{JSshb}',
      value: '双宾语句标记'
    },
    {
      key: '{JSjs}',
      value: '紧缩句标记'
    },
    {
      key: '{JSgd}',
      value: '固定句式标记'
    },
    {
      key: '{JLshf}',
      value: '双重否定句标记'
    },
    {
      key: '{JLfw}',
      value: '反问句标记'
    },
    {
      key: '{JLqs}',
      value: '祈使句标记'
    },
    {
      key: '{JLgt}',
      value: '感叹句标记'
    },
    {
      key: '{JXmw}',
      value: '名词谓语句标记'
    },
    {
      key: '{JXxw}',
      value: '形容词谓语句标记'
    },
    {
      key: '{JXzww}',
      value: '主谓谓语句标记'
    },
    {
      key: '{JXfzw}',
      value: '非主谓句标记'
    },
    {
      key: '[-Jzhuy]',
      value: '主语残缺'
    },
    {
      key: '[+Jzhuy]',
      value: '主语多余'
    },
    {
      key: '[-Jwy]',
      value: '谓语残缺'
    },
    {
      key: '[+Jwy]',
      value: '谓语多余'
    },
    {
      key: '[-Jsy]',
      value: '述语残缺'
    },
    {
      key: '[+Jsy]',
      value: '述语多余'
    },
    {
      key: '[-Jby]',
      value: '宾语残缺'
    },
    {
      key: '[+Jby]',
      value: '宾语多余'
    },
    {
      key: '[-Jbuy]',
      value: '补语残缺'
    },
    {
      key: '[+Jbuy]',
      value: '补语多余'
    },
    {
      key: '[-Jdy]',
      value: '定语残缺'
    },
    {
      key: '[+Jdy]',
      value: '定语多余'
    },
    {
      key: '[-Jzy]',
      value: '状语残缺'
    },
    {
      key: '[+Jzy]',
      value: '状语多余'
    },
    {
      key: '[-Jzxy]',
      value: '中心语残缺'
    },
    {
      key: '[+Jzxy]',
      value: '中心语多余'
    },
    {
      key: '[-J？]',
      value: '句子成分偏误存疑'
    }
  ],
  yp: [
    {
      key: '[YPgl]',
      value: '关联词语偏误标记'
    },
    {
      key: '[YPcy]',
      value: '其他词语衔接不当标记'
    },
    {
      key: '[YPsl]',
      value: '省略不当标记'
    },
    {
      key: '[YPlg]',
      value: '语义连贯偏误标记'
    },
    {
      key: '[YP？]',
      value: '语篇偏误存疑标记'
    }
  ],
  // yp: [
  //   {
  //     key: '[YPxjgl]',
  //     value: '关联词语偏误标记'
  //   },
  //   {
  //     key: '[YPxjzc]',
  //     value: '指称词偏误标记'
  //   },
  //   {
  //     key: '[YPxjslbz]',
  //     value: '省略不足标记'
  //   },
  //   {
  //     key: '[YPxjslgd]',
  //     value: '省略过度标记'
  //   },
  //   {
  //     key: '[YPxjtd]',
  //     value: '替代不当标记'
  //   },
  //   {
  //     key: '[YPxjch]',
  //     value: '词汇衔接不当标记'
  //   },
  //   {
  //     key: '[YPxj？]',
  //     value: '语篇衔接偏误存疑标记'
  //   },
  //   {
  //     key: '[YPlg]',
  //     value: '连贯偏误标记'
  //   },
  //   {
  //     key: '[YPlg？]',
  //     value: '连贯偏误存疑标记'
  //   }
  // ],
  yt: [
    {
      key: '[YTkc]',
      value: '书面语语体中误用口语词'
    },
    {
      key: '[YTkd]',
      value: '书面语语体中误用口语短语'
    },
    {
      key: '[YTkj]',
      value: '书面语语体中误用口语句式'
    },
    {
      key: '{YTsc}',
      value: '书面语词标记'
    },
    {
      key: '{YTsd}',
      value: '书面语短语标记'
    },
    {
      key: '{YTsj}',
      value: '书面语句标记'
    },
    {
      key: '[YTsc]',
      value: '口语语体中误用书面语词'
    },
    {
      key: '[YTsd]',
      value: '口语语体中误用书面语短语'
    },
    {
      key: '[YTsj]',
      value: '口语语体中误用书面语句式'
    },
    {
      key: '{YTkc}',
      value: '口语词标记'
    },
    {
      key: '{YTkd}',
      value: '口语短语标记'
    },
    {
      key: '{YTkj}',
      value: '口语句标记'
    }
  ],
  xc: [
    {
      key: '[CGby]',
      value: '比喻'
    },
    {
      key: '[CGsw]',
      value: '设问'
    },
    {
      key: '[CGpb]',
      value: '排比'
    },
    {
      key: '[CGfw]',
      value: '反问'
    },
    {
      key: '[CGyy]',
      value: '引用'
    },
    {
      key: '[CGkz]',
      value: '夸张'
    },
    {
      key: '[CGbn]',
      value: '比拟'
    },
    {
      key: '[CGdb]',
      value: '对比'
    },
    {
      key: '[CGjd]',
      value: '借代'
    },
    {
      key: '[CGcd]',
      value: '层递'
    },
    {
      key: '[CGsg]',
      value: '双关'
    },
    {
      key: '[CGnl]',
      value: '粘连'
    },
    {
      key: '[CGdo]',
      value: '对偶'
    },
    {
      key: '[CGqt]',
      value: '其他辞格'
    },
    {
      key: '[CG？]',
      value: '辞格标注存疑'
    },
    {
      key: '{CGby}',
      value: '比喻'
    },
    {
      key: '{CGsw}',
      value: '设问'
    },
    {
      key: '{CGpb}',
      value: '排比'
    },
    {
      key: '{CGfw}',
      value: '反问'
    },
    {
      key: '{CGyy}',
      value: '引用'
    },
    {
      key: '{CGkz}',
      value: '夸张'
    },
    {
      key: '{CGbn}',
      value: '比拟'
    },
    {
      key: '{CGdb}',
      value: '对比'
    },
    {
      key: '{CGjd}',
      value: '借代'
    },
    {
      key: '{CGcd}',
      value: '层递'
    },
    {
      key: '{CGsg}',
      value: '双关'
    },
    {
      key: '{CGnl}',
      value: '粘连'
    },
    {
      key: '{CGdo}',
      value: '对偶'
    },
    {
      key: '{CGqt}',
      value: '其他辞格'
    },
    {
      key: '{CG？}',
      value: '辞格标注存疑'
    }
  ],
  sp: [
    {
      key: '[Yt]',
      value: '非正常停顿'
    },
    {
      key: '[Yz]',
      value: '重音偏误'
    },
    {
      key: '[Ys]',
      value: '声母偏误'
    },
    {
      key: '[Yy]',
      value: '韵母偏误'
    },
    {
      key: '[Yd]',
      value: '声调偏误'
    },
    {
      key: '[Yq]',
      value: '轻声偏误'
    },
    {
      key: '[Ye]',
      value: '儿化偏误'
    },
    {
      key: '[Y?]',
      value: '语音存疑'
    },
    {
      key: '[Yw]',
      value: '外语词'
    },
    {
      key: '[具体现象]',
      value: '伴随语音现象'
    },
    {
      key: '——',
      value: '语音拖长'
    }
  ]
}
export {getCorpusTagPoolData, deleteMyCorpus, getextractTableData, getCorpusTag, extract, getCorpusTagData, jdugeCorpusCheck, corpusCode, saveTagCorpus, getmyhistoryCorpus, searchCorpusInfo, getAccess}
