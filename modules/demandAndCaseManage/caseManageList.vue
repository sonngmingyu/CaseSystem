<template>
	<div class="case-style">
		<div class="case-select">
			<el-row>
				<el-col :span="12">
					<el-button type="info" @click="addCase()" v-if="this.saveBt !== '查看'">新增</el-button>
				</el-col>
				<el-col :span="12">
					<advancedSearch
						:searchPlaceholder="searchPlaceholder"
						:searchStyle="searchStyle"
						:advance="true"
						@search="search"
						ref="search">
						<div slot="search">
							<el-form :model="filters" label-width="180px">
								<el-row>
									<el-col :span="12">
										<el-form-item label="CASE名称">
											<el-input v-model="filters.ctitle"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="处理人">
											<el-input v-model="filters.clr"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="12">
										<el-form-item label="创建日期">
											<el-date-picker                          
												v-model="filters.CreateDate"
												type="date"
												placeholder="请选择创建日期"
												style="width:150px">
											</el-date-picker>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="系统名称">
											<el-input v-model="filters.project_name"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row>
									<el-col :span="24">
										<el-form-item>
											<el-button class="m-r-10" plain @click="resetFilters()">清空</el-button>
											<el-button class="m-r-10" type="primary" @click="searchInfo()">查询</el-button>
                  	</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</div>
					</advancedSearch>
				</el-col>
			</el-row>
		</div>
		<div class="case-table-style">
			<el-table :data="caseManageData" style="width: 100%">
				<el-table-column prop="cid" label="CASE编号" width="300">
					<template slot-scope="scope">
						<span style="color: #6CA6CD;font-weight:bold;">{{scope.row.cid}}</span>
					</template>
				</el-table-column>
				<el-table-column prop="ctitle" label="CASE标题" width="100"></el-table-column>
				<el-table-column prop="ctype" label="分类" width="80"></el-table-column>
				<el-table-column prop="clr" label="处理人" width="80"></el-table-column>
				<el-table-column prop="CreateDate" label="创建日期" width="100">
					<template slot-scope="scope">
						{{scope.row.CreateDate | moment('YYYY-MM-DD')}}
					</template>
				</el-table-column>
				<el-table-column prop="status" label="状态" width="80"></el-table-column>
				<el-table-column prop="project_name" label="系统名称" width="100"></el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="assign()" size="mini">指派</el-button>
						<el-button @click="hangUp()" size="mini">挂起</el-button>
						<el-button @click="statement()" size="mini">结单</el-button>
						<el-button @click="goBack()" size="mini">回退</el-button>
					</template>
				</el-table-column>
				<el-table-column label="CASE操作">
					<template slot-scope="scope">
						<el-tooltip content="编辑">
							<el-button @click="editCase(scope.row)" type="info" size="mini">
								<i class="el-icon-edit"></i>
							</el-button>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="pagination">
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
		<div class="assign-style">
			<el-dialog :title="assignTitle" :visible.sync="assignVisible" :show-close="false">
				<el-form :model="assignData" :rules="assignRules" ref="assignFormData">
					<el-form-item label="被指派人：" prop="clr">
						<el-input v-model="assignData.clr"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="addAssign()">确定</el-button>
						<el-button type="primary" @click="handelColse()">取消</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
		</div>
		<div>
			<addCaseDialog 
				@queryAllCase="queryAllCase"
				@handleClose="handleClose"
				:caseDialogVisible="caseDialogVisible"
				:caseFormData="caseFormData"
				:caseDisabled="caseDisabled"
				:caseTitle="caseTitle"
			></addCaseDialog>
		</div>
	</div>
</template>
<script type="es6">
import advancedSearch from '../../../../../../components/arp-advancedSearch.vue'
import addCaseDialog from './addCaseDialog.vue'
import * as caseService from '../../service/casemanage/case.js'
import {TokenAPI} from '../../../../../../service/TokenAPI'
import moment from 'moment'
export default {
	data () {
		return {
			caseFormData: {},
			assignData: {},
			assignVisible: false,
			assignRules: [],
			filters: {
				ctitle: '',
				clr: '',
				CreateDate: '',
				project_name: ''
			},
			saveBt: '',
			searchPlaceholder: '请输入查询条件',
			searchStyle: 'width: 300px;margin-left: 27%;',
			currentPage: 1,
			pageSize: 10,
			total: 0,
			caseManageData: [],
			caseDialogVisible: false,
			caseFormLoading: false,
			caseDisabled: false,
			caseTitle: '',
			assignTitle: '指派任务',
			searchKey: '',
			assignRules: {
				clr:[
					{required: true, message: '请填写被指派人', trigger: 'blur'}
				]
			}
		}
	},
	mounted () {
		this.queryAllCase()
	},
	methods: {
		// 外层模糊查询
		search (searchKey) {
			let params = {
				pageSize: this.pageSize,
				page: this.currentPage,
				token: TokenAPI.getToken(),
				searchKey: searchKey
			}
			// caseService.queryCaseStr(params).then(res => {
			// 	console.log('====================', res)
			// })
			this.$request.post(`/team/Index/getcaselike`, params).then(res => {
				console.log('res++++++++++++', res)
			})
		},
		// 添加case
		addCase () {
			this.caseDialogVisible = true
			this.caseTitle = '新增CASE/需求信息'
			this.saveBt = '新增'
			this.caseDisabled = false
			this.caseFormData = {}
		},
		// 修改CASE信息
		editCase (row) {
			this.caseDialogVisible = true
			this.caseTitle = '编辑CASE/需求信息'
			this.saveBt = '编辑'
			this.caseDisabled = false
			this.caseFormData = Object.assign({}, row)
		},
		// 查询单个case
		// 查询所有case列表数据
		queryAllCase () {
			let params = {
				pageSize: this.pageSize,
				currentPage: this.currentPage,
				token: TokenAPI.getToken()
			}
			caseService.queryCaeList(params).then(res => {
				this.caseManageData = res.data.data
				this.total = res.data.count
			})
		},
		handleClose () {
			this.caseDialogVisible = false
		},
		// 清空
		resetFilters () {
			this.filters.ctitle = ''
			this.filters.clr = ''
			this.filters.CreateDate = '',
			this.project_name = ''
		},
		// 关闭指派弹框
		handelColse () {
			this.assignVisible = false
		},
		// 高级查询
		searchInfo () {},
		//指派
		assign () {
			this.assignVisible = true
		},
		// 添加指派人
		addAssign () {},
		// 挂起
		hangUp () {},
		// 结单
		statement () {},
		// 回退
		goback () {},
		// 当前页改变
		handleChange (val) {
			this.currentPage = val
			this.queryAllCase()
		}
	},
	components: {
		advancedSearch, addCaseDialog
	}
}
</script>
<style scoped lang="scss">
.case-table-style{
	margin-top: 15px;
}
</style>

