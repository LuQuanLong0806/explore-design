
import { export_table_to_excel } from "module";
// 前端导出excel表格
// const formatJson = (filterVal, jsonData) => {
//     return jsonData.map((v) =>
//       filterVal.map((j) => {
//         if (j === "timestamp") {
//           return parseTime(v[j]);
//         } else {
//           return v[j];
//         }
//       })
//     );
//   };
// const exportTableToExcel = function(header, keys, list, filename = '导出列表', config = {}){
//     const data = formatJson(keys, list);
//     export_table_to_excel({
//         header,
//         data,
//         filename,
//         autoWidth: true,
//         bookType: "xlsx",
//         ...config
//       });
// }

class ExportTableToExcel{
    constructor(){}
    formatJson(filterVal, jsonData) {
        return jsonData.map((v) =>
          filterVal.map((j) => {
            if (j === "timestamp") {
              return parseTime(v[j]);
            } else {
              return v[j];
            }
          })
        );
    }
    exportTableToExcel(header, keys, list, filename = '导出列表', config = {}){
        const data = this.formatJson(keys,list);
        export_table_to_excel({
            header,
            data,
            filename,
            autoWidth: true,
            bookType: "xlsx",
            ...config
          });
    }
}

export default ExportTableToExcel;