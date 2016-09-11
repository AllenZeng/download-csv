var creatCSVFile = require('./dist/creatCSVFile');
var downloadFile = require('./dist/downloadFile');

module.exports = function (datas, columns, filename) {
  downloadFile(creatCSVFile(datas, columns), filename);
}
