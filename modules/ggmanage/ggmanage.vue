<template>
  <div class="enclosure">
		<div>
			<el-button type="primary" @click="addEnclosure()">添加公告</el-button>
		</div>
		<div class="enclosure-table" style="margin-top:15px;">
			<el-table :data="enclosureData">
				<el-table-column label="序号" prop="InnerID"></el-table-column>
				<el-table-column label="公告标题" prop="ntitle" :show-overflow-tooltip="true"></el-table-column>
				<el-table-column label="公告内容" prop="nbody" :show-overflow-tooltip="true"></el-table-column>
				<el-table-column label="发布时间" prop="CreateDate"></el-table-column>
				<el-table-column label="过期时间" prop="ExpDate">
					<template slot-scope="scope">
						{{scope.row.ExpDate | moment('YYYY-MM-DD')}}
					</template>
				</el-table-column>
				<el-table-column label="范围" prop="nsope" :formatter="bsopeFormatter"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button type="primary" @click="queryEnclosure(scope.row)" size="mini">附件</el-button>
						<el-button type="primary" size="mini" @click="updateEnclosure(scope.row)">修改</el-button>
						<el-button type="primary" size="mini" @click="queryEnclosure(scope.row)">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div>
			<el-row class="padding-10 text-right">
				<el-pagination
					@current-change="handleChange"
					:current-page="currentPage"
					:page-size="pageSize"
					layout="total, prev, pager, next"
					:total="total">
				</el-pagination>
			</el-row>
		</div>
		<div class="enclosure-dialog">
			<el-dialog :title="enclosureTitle" :show-close="false" :visible.sync="enclosureDialogVisible">
				<el-form :model="enclosureForm" ref="enclosureForm" :rules="caseRules"	label-width="120px" v-loading="enclosureLoading" element-loading-text="正在发布">
					<el-row>
						<el-col :span="12">
							<el-form-item label="主题：" prop="ntitle">
								<el-input v-model="enclosureForm.ntitle" :disabled="disabled" style="width:180px;"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="发布范围：">
								<el-select v-model="enclosureForm.nsope" :disabled="disabled" style="width:180px;">
									<el-option v-for="item of nsopeList" :value="item.id" :key="item.id" :label="item.label"></el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="12">
							<el-form-item label="过期时间：" prop="ExpDate">
									<el-date-picker
									:disabled="disabled"
									style="width:180px;"                    
									v-model="enclosureForm.ExpDate"
									type="date"
									placeholder="请选择过期时间">
								</el-date-picker>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="发布内容：" prop="nbody">
								<textarea v-model="enclosureForm.nbody" cols="3" :disabled="disabled" rows="3" style="width:180px;"></textarea>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-form-item label="上传附件："></el-form-item>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24" style="text-align: right;">
							<el-button type="primary" @click="publishEnclosure()">发布公告</el-button>
							<el-button type="primary" @click="handelCancle()">取消发布</el-button>
						</el-col>
					</el-row>
				</el-form>
			</el-dialog>
		</div>
	</div>
</template>
<script type="es6">
import {TokenAPI} from '../../../../../../service/TokenAPI'
import moment from 'moment'
export default {
	data () {
		return {
			enclosureData: [],
			currentPage: 1,
			pageSize: 5,
			total: 0,
			nsopeList: [
				{
					id: 1,
					label: '产品事业部'
				},
				{
					id: 2,
					label: '财务部'
				},
				{
					id: 3,
					label: '市场部'
				},
				{
					id: 4,
					label: '人事行政部'
				},
				{
					id: 5,
					label: '全部'
				}
			],
			enclosureTitle: '发布公告',
			enclosureDialogVisible: false,
			caseRules: {
				ntitle: [
          {required: true, message: '请填写公告标题', trigger: 'blur'}
				],
				nbody: [
          {required: true, message: '请填写公告内容', trigger: 'blur'}
				],
				ExpDate: [
					{required: true, message: '请选择过期时间', trigger: 'blur'}
				]
			},
			enclosureLoading: false,
			enclosureForm: {
				ntitle: '',
				nsope: '',
				nbody: '',
				ExpDate: ''
			},
			disabled: false
		}
	},
	mounted () {
		this.queryAllEnclosure()
	},
	methods: {
		// 格式化范围信息
		bsopeFormatter (row) {
			if (row.nsope === '1') {
				return '产品事业本部'
			} else if (row.nsope === '2') {
				return '财务部'
			} else if (row.nsope === '3') {
				return '市场部'
			} else if (row.nsope === '4') {
				return '人事行政部'
			} else if (row.nsope === '5') {
				return '全部'
			}
		},
		// 查询全部公告信息
		queryAllEnclosure () {
			let params = {
				pageSize: this.pageSize,
				page: this.currentPage,
				token: TokenAPI.getToken()
			}
			this.$request.post(`/team/Index/getnotice`, params).then(res => {
				this.enclosureData = res.data.data
				this.total = res.data.count
			})
		},
		// 修改公告
		updateEnclosure (row) {
			this.enclosureDialogVisible = true
			this.enclosureForm = Object.assign({}, row)
			this.enclosureTitle = '编辑公告信息'
			this.disabled = false
		},
		// 发布公告
		publishEnclosure () {
			this.enclosureLoading = true
			this.disabled = false
			let params = {
				ntitle: this.enclosureForm.ntitle,
				nbody: this.enclosureForm.nbody,
				nsope: this.enclosureForm.nsope,
				CreateDate: moment(new Date().getTime()).format('YYYY-MM-DD'),
				ExpDate: this.enclosureForm.ExpDate,
				token: TokenAPI.getToken()
			}
			this.$refs.enclosureForm.validate((valid) => {
				if (valid) {
					if (this.enclosureTitle.startsWith('发布')) {
						this.$request.post(`/team/Index/addnotice`, params).then(res => {
							console.log('++++++++++', res)
							if (res.data.ID === '-1') {
								this.$message(() => {
									type: 'error'
									message: `${res.msg}`
								})
							} else if (res.status === 200) {
								this.$message(() => {
									type: 'success'
									message: '发布成功'
								})
								this.enclosureDialogVisible =false
								this.$refs['enclosureForm'].resetFields()
								this.queryAllEnclosure()
							}
						}).finally(() => {
							this.enclosureLoading = false
						})
					} else if (this.enclosureTitle.startsWith('编辑')) {
						params.InnerID = this.enclosureForm.InnerID
						this.$request.post(`/team/Index/updatenotice`, params).then(res => {
							console.log('----------', res)
							if (res.data.ID === '-1') {
								this.$message(() => {
									type: 'error'
									message: `${res.msg}`
								})
							} else if (res.status === 200) {
								this.$message(() => {
									type: 'success'
									message: '修改成功'
								})
								this.enclosureDialogVisible =false
								this.$refs['enclosureForm'].resetFields()
								this.queryAllEnclosure()
							}
						}).finally(() => {
							this.enclosureLoading = false
						})
					}
				}
			})
		},
		// 查看附件
		queryEnclosure () {},
		addEnclosure () {
			this.enclosureDialogVisible = true
			this.enclosureForm = {}
		},
		handleChange (val) {
			this.currentPage = val
			this.queryAllEnclosure()
		},
		// 取消发布
		handelCancle () {
			this.enclosureDialogVisible = false
		}
	},
	components: {}
}
</script>

