const detectionClientType = require('./detectionClientType');

module.exports = (csvFile, filename = 'export.csv') => {
  if (!csvFile) {
    console.log('the file is null');
    return;
  }

  const client = detectionClientType();
  const bomCode = '\ufeff';
  let text = `data:attachment/csv;charset=utf-8,${bomCode}${encodeURIComponent(csvFile)}`;

  if (window.Blob && window.URL && window.URL.createObjectURL) {
    const csvData = new Blob([bomCode + csvFile], { type: 'text/csv' });
    text = URL.createObjectURL(csvData);
  }

  if (client.name === 'IE') {
    const oWin = window.top.open('about:blank', '_blank');
    oWin.document.write(`sep=,\r\n${csvFile}`);
    oWin.document.close();
    oWin.document.execCommand('SaveAs', true, filename);
    oWin.close();
    return;
  }

  if (client.name === 'Safari') {
    const link = document.createElement('a');
    link.id = 'csvDwnLink';
    document.body.appendChild(link);

    const csv = bomCode + csvFile;
    const csvData = 'data:attachment/csv;charset=utf-8,' + encodeURIComponent(csv);

    document.getElementById('csvDwnLink').setAttribute('href', csvData);
    // document.getElementById('csvDwnLink').setAttribute('download', filename);
    document.getElementById('csvDwnLink').click();

    document.body.removeChild(link);
    // alert('文件导出成功，请修改文件后缀为 .csv 后使用');
    return;
  }

  if (client.name === 'Firefox') {
    const a = document.createElement('a');
    a.download = filename;
    a.target = '_blank';
    a.href = text;

    const event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    a.dispatchEvent(event);
    return;
  }

  // chrome and other browsers
  const a = document.createElement('a');
  a.download = filename;
  a.href = text;
  a.click();
}
