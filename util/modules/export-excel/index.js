/* eslint-disable */
import { export_json_to_excel, export_table_to_excel } from "./Export2Excel";
// 前端导出excel表格
const formatJson = (filterVal, jsonData) => {
  return jsonData.map((v) =>
    filterVal.map((j) => {
      return v[j];
    })
  );
};

/**
 *  @param {header} Array 导出列名称
 *  @param {keys} String 导出列key
 *  @param {list} Array 导出列数据
 *  @param {filename} String 导出文件名称
 *  @param {config} Object 配置项
*/
const exportJsonToExcel = function (header, keys, list, filename = '导出列表', config = {}) {
  const data = formatJson(keys, list);
  export_json_to_excel({
    header,
    data,
    filename,
    autoWidth: true,
    bookType: "xlsx",
    ...config
  });
}

export default {
  exportJsonToExcel,
  exportTableToExcel: export_table_to_excel // 传参 table的id
}

// class ExportTableToExcel {
//   constructor() {
//     this.formatJson = (filterVal, jsonData) => {
//       return jsonData.map((v) =>
//         filterVal.map((j) => {
//           return v[j];
//         })
//       );
//     }
//   }
//   exportTableToExcel(header, keys, list, filename = '导出列表', config = {}) {
//     console.log('this~', this);
//     const data = this.formatJson(keys, list);
//     export_table_to_excel({
//       header,
//       data,
//       filename,
//       autoWidth: true,
//       bookType: "xlsx",
//       ...config
//     });
//   }
// }
// export default ExportTableToExcel;