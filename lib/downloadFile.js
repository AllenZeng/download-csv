import detectionClientType from './detectionClientType';

module.exports = (csvFile, filename = 'export.csv') => {
  const client = detectionClientType();
  const bomCode = '\ufeff';
  let text = `data:attachment/csv;charset=utf-8,${bomCode}${encodeURIComponent(csvFile)}`;

  if (window.Blob && window.URL && window.URL.createObjectURL) {
    const csvData = new Blob([bomCode + csvFile], { type: 'text/csv' });
    text = URL.createObjectURL(csvData);
  }

  if (client.name === 'Chrome') {
    const a = document.createElement('a');
    a.download = filename;
    a.href = text;
    a.click();
  }

  if (client.name === 'IE' && Number(client.version) < 10) {
    const oWin = window.top.open('about:blank', '_blank');
    oWin.document.write(`sep=,\r\n${text}`);
    oWin.document.close();
    oWin.document.execCommand('SaveAs', true, filename);
    oWin.close();
  }

  if (client.name === 'Safari') {
    const a = document.createElement('a');
    a.download = filename;
    a.target = '_blank';
    a.href = text;

    const event = document.createEvent('MouseEvents');
    event.initEvent('click', true, true);
    a.dispatchEvent(event);
  }
}
