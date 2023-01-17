/* eslint-disable */
import toExcel from "./export-excel/index.js"; // 引入JSON导出exce工具


const utils = {
    exportJsonToExcel: toExcel.exportJsonToExcel,
    exportTableToExcel: toExcel.exportTableToExcel,
}

// 导出
export default utils