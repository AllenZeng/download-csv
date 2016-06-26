const { creatCSVFile, downloadFile } = require('./lib');

module.exports = (datas, columns, separator) => {
  downloadFile(creatCSVFile(datas, columns, separator));
}
