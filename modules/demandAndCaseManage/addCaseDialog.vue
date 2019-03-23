<template>
	<div class="case-add">
		<el-dialog
			width="70%"
			:title="caseTitle"
			:modal="true" 
			:close-on-press-escape="false" 
			:close-on-click-modal="false" 
			:show-close="false"
			:visible.sync="caseDialogVisible">
			<el-form :model="caseFormData" :rules="caseRules" ref="caseFormData"  label-position="right"
			label-width="200px" v-loading="caseFormLoading" element-loading-text="正在保存">
				<el-row>
					<el-col :span="12">
						<el-form-item label="CASE名称：" prop="project_name">
							<el-input v-model="caseFormData.project_name" style="width:180px;" :disabled="caseDisabled"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="CASE标题：">
							<el-input v-model="caseFormData.ctitle" style="width:180px;" :disabled="caseDisabled"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="CASE类型：" prop="ctype">
							<el-select v-model="caseFormData.ctype" style="width:180px;" clearable :disabled="caseDisabled">
								<el-option v-for="item in caseTypeList" :key="item.id" :label="item.value" :value="item.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="所属模块：" prop="modle_name">
							<el-select v-model="caseFormData.modle_name" style="width:180px;" clearable :disabled="caseDisabled">
								<el-option v-for="item in modleList" :key="item.id" :label="item.value" :value="item.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="服务目录类别：" prop="category">
							<el-select v-model="caseFormData.category" style="width:180px;" clearable :disabled="caseDisabled">
								<el-option v-for="item in categoryList" :key="item.id" :label="item.value" :value="item.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="优先等级：" prop="level">
							<el-select v-model="caseFormData.level" style="width:180px;" clearable :disabled="caseDisabled">
								<el-option v-for="item in levelList" :key="item.id" :label="item.value" :value="item.value"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="创建日期：" prop="CreateDate">
							<el-date-picker
								style="width:180px;"  
								:disabled="caseDisabled"                   
								v-model="caseFormData.CreateDate"
								type="date"
								placeholder="请选择创建日期">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="完成日期：" prop="yqwc_date">
							<el-date-picker
								style="width:180px;"
								:disabled="caseDisabled"                     
								v-model="caseFormData.yqwc_date"
								type="date"
								placeholder="请选择完成日期">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="客户姓名：">
							<el-input v-model="caseFormData.customer_name" style="width:180px;" :disabled="caseDisabled"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="备注：">
							<!-- <el-input v-model="caseFormData.memo" :disabled="caseDisabled"></el-input> -->
							<textarea v-model="caseFormData.memo" style="width:180px;" cols="3" rows="3"></textarea>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row style="text-right">
					<el-col :span="24">
						<el-button @click="addOK()" v-if="!this.caseTitle.startsWith('查看')">确定</el-button>
						<el-button @click="handleClose()">取消</el-button>
					</el-col>
				</el-row>
			</el-form>
		</el-dialog>
	</div>
</template>
<script type="es6">
import * as caseService from '../../service/casemanage/case.js'
import {TokenAPI} from '../../../../../../service/TokenAPI'
export default {
	props: {
		caseDialogVisible: {
			type:Boolean,
			'default' () {
				return false
			}
		},
		caseDisabled: {
			type: Boolean,
			'default' () {
				return false
			}
		},
		caseTitle: {
			type: String,
			'default' () {
				return ''
			}
		},
		caseFormData: {
			type: Object,
			'default' () {
				return {}
			}
		}
	},
	data () {
		return {
			// caseFormData: {
			// 	project_name: '',
			// 	ctitle: '',
			// 	ctype: '',
			// 	modle_name: '',
			// 	CreateDate: '',
			// 	yqwc_date: '',
			// 	customer_name: '',
			// 	slr: '',
			// 	category: '',
			// 	level: '',
			// 	memo: '', //备注,
			// 	slr: ''
			// },
			caseFormLoading: false,
			// caseTitle: '新增CASE',
			// caseDisabled: false,
			caseRules: {
				project_name: [
          {required: true, message: '请填写CASE名称', trigger: 'blur'}
				],
				ctype: [
          {required: true, message: '请填写CASE类型', trigger: 'blur'}
				],
				modle_name: [
          {required: true, message: '请填写所属模块', trigger: 'blur'}
				],
				CreateDate: [
          {required: true, message: '请填写项目/需创建时间', trigger: 'blur'}
				],
				yqwc_date: [
          {required: true, message: '请填写项目/需要求完成时间', trigger: 'blur'}
				]
			},
			caseTypeList: [
				{
					id: '1',
					value: '需求'
				},
				{
					id: '2',
					value: '实施'
				},
				{
					id: '3',
					value: 'BUG'
				},
				{
					id: '4',
					value: '测试'
				}
			],
			token: '',
			modleList: [
				{
					id: '1',
					value: '模块1'
				},
				{
					id: '2',
					value: '模块2'
				},
				{
					id: '3',
					value: '模块3'
				}
			],
			categoryList: [], //服务目录类别
			levelList: [
				{
					id: '1',
					value: '非常紧急'
				},
				{
					id: '2',
					value: '紧急'
				},
				{
					id: '3',
					value: '一般'
				}
			]
		}
	},
	mounted () {
	},
	methods: {
		// 确定添加数据
		addOK () {
			this.caseFormLoading = true
			let userInfo = TokenAPI.getStaff()
			let UserName = userInfo.UserName
			// let params = {
			// 	project_name: this.caseFormData.project_name,
			// 	ctitle: this.caseFormData.ctitle,
			// 	ctype: this.caseFormData.ctype,
			// 	modle_name: this.caseFormData.modle_name,
			// 	CreateDate: this.caseFormData.CreateDate,
			// 	yqwc_date: this.caseFormData.CreateDate,
			// 	customer_name: this.caseFormData.customer_name,
			// 	category: this.caseFormData.category,
			// 	level: this.caseFormData.level,
			// 	memo: this.caseFormData.memo,
			// 	token: TokenAPI.getToken(),
			// 	slr: UserName
			// }
			// let params = Object.assign({}, this.caseFormData)
			let params = Object.assign({token: TokenAPI.getToken()}, this.caseFormData)
			this.$refs.caseFormData.validate((valid) => {
				if (valid) {
					if (this.caseTitle.startsWith('新增')) {
						caseService.addCase(params).then(res => {
							if (res.data.ID === '-1') {
								this.$message({
									type: 'error',
									message: `${res.msg}`
								})
							} else {
								this.$message({
									type: 'success',
									message: '新增成功！'
								})
								this.handleClose()
								this.$emit('queryAllCase', true)
							}
						}).finally(() => {
              this.caseFormLoading = false
            })
					} else if (this.caseTitle.startsWith('编辑')) {
						caseService.editCase(params).then(res => {
							if (res.data.ID === '-1') {
								this.$message({
									type: 'error',
									message: `${res.msg}`
								})
							} else {
								this.$message({
									type: 'success',
									message: '修改成功！'
								})
								this.handleClose()
								this.$emit('queryAllCase', true)
							}
						}).finally(() => {
              this.caseFormLoading = false
            })
					}
				}
			})
		},
		// 关闭弹框
		handleClose () {
			this.$emit('handleClose')
		}
	},
	components: {
	}
}
</script>

