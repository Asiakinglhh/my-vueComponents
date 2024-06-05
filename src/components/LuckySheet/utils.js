export function createSheetOpts(type) {
	const excelWorkSheet = {
		name: 'default',
		index: '1',
		order: 0,
		status: 1,
		// column: 30,
		// row: 144,
		cellData: [],
		data: []
	}
	// for (let i = 0; i < 144; i++) {
	// 	const nullArr = []
	// 	for (let j = 0; j < 30; j++) {
	// 		nullArr.push(null)
	// 	}
	// 	excelWorkSheet.data.push(nullArr)
	// }
	if (type === 'protect') {
		// 设滚动条位 0 0
		excelWorkSheet.scrollLeft = 0
		excelWorkSheet.scrollTop = 0
		// 设置权限保护
		excelWorkSheet.config = {
			authority: {
				sheet: 1, // 如果为1或true，则该工作表受到保护；如果为0或false，则该工作表不保护
				selectLockedCells: 1, // 选定锁定单元格
				selectunLockedCells: 1, // 选定解除锁定的单元格
				formatCells: 1, // 设置单元格格式
				formatColumns: 1, // 设置列格式
				formatRows: 1, // 设置行格式
				sort: 1, // 排序
				filter: 1, // 使用自动筛选
				insertColumns: 0, // 插入列
				insertRows: 0, // 插入行
				insertHyperlinks: 0, // 插入超链接
				deleteColumns: 0, // 删除列
				deleteRows: 0, // 删除行
				usePivotTablereports: 0, // 使用数据透视表和报表
				editObjects: 0, // 编辑对象
				editScenarios: 0, // 编辑方案
				hintText: '', // 弹窗提示的文字
				algorithmName: 'None', // 加密方案: MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
				saltValue: null, // 密码解密的盐参数，为一个自己定的随机数值
				allowRangeList: [{ // 区域保护
					name: 'area', // 名称
					password: '123456', // 密码
					hintText: '', // 提示文字
					algorithmName: 'None', // 加密方案: MD2,MD4,MD5,RIPEMD-128,RIPEMD-160,SHA-1,SHA-256,SHA-384,SHA-512,WHIRLPOOL
					saltValue: null, // 密码解密的盐参数，为一个自己定的随机数值
					sqref: '$A1:$Q144' // 区域范围
				}]
			}
		}
	}
	return excelWorkSheet
}

// 将模版与luckysheet默认配置关联
export function luckyDefaultOptions(sheetOpts) {
	return {
		container: 'luckysheet',
		lang: 'zh',
		// showtoolbarConfig: [
		// 	'undo', 'redo', 'paintFormat', '|',
		// 	'font', 'fontSize', 'moreFormats', '|',
		// 	'bold', 'italic', 'strikethrough', 'underline', 'textColor', '|',
		// 	'fillColor', 'border', 'mergeCe11', '|',
		// 	'horizontalAlignMode', 'verticalAlignMode', 'textWrapMode', '|',
		// 	'function', 'frozenMode', 'sortAndFilter', 'findAndReplace', 'protection'
		// ],
		showinfobar: false,
		// showsheetbar: false,
		// enableAddBackTop: false,
		// enableAddRow: false,
		// showConfigWindowResize: false,
		// forceCalculation: false,
		// // 配置右键菜单
		// cellRightClickConfig: {
		// 	copy: false, // 复制
		// 	copyAs: false, // 复制为
		// 	paste: false, // 粘贴
		// 	insertRow: true, // 插入行
		// 	insertColumn: true, // 插入列
		// 	deleteRow: true, // 删除选中行
		// 	deleteColumn: true, // 删除选中列
		// 	deleteCell: false, // 删除单元格
		// 	hideRow: false, // 隐藏选中行和显示选中行
		// 	hideColumn: false, // 隐藏选中列和显示选中列
		// 	rowHeight: true, // 行高
		// 	columnWidth: true, // 列宽
		// 	clear: false, // 清除内容
		// 	matrix: false, // 矩阵操作选区
		// 	sort: false, // 排序选区
		// 	filter: false, // 筛选选区
		// 	chart: false, // 图表生成
		// 	image: false, // 插入图片
		// 	link: false, // 插入链接
		// 	data: false, // 数据验证
		// 	cellFormat: false, // 设置单元格格式
		// },
		data: [sheetOpts] // 工作表配置
	}
}