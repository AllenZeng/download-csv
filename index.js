import { creatCSVFile, downloadFile } from './lib/downloadCsv';

module.exports = (datas, columns, separator) => {
  downloadFile(creatCSVFile(datas, columns, separator));
}
