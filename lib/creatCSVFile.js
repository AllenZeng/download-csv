module.exports = (datas, columns, separator = ',') => {
  if (!datas || (Array.isArray(datas) && !datas.length) || !Object.keys(datas).length) {
    return '传入数据为空(the download datas is null)';
  }
  let content = [];

  if ((typeof datas === 'object') && Array.isArray(datas)) {
    const dataType = Array.isArray(datas[0]);
    if (datas.some(x => (Array.isArray(x) !== dataType))) {
      return '传入数据格式不一致(the array element data format is inconsistent)';
    }
    if (dataType) {
      content = content.concat(datas.map(v => v.join(separator)));
    } else {
      let columnOrder = [];
      // 可以优化
      datas.forEach(x => columnOrder = columnOrder.concat(Object.keys(x)));
      // 去重
      columnOrder = columnOrder.filter((value, index, self) => self.indexOf(value) === index);

      if (columnOrder.length > 0) {
        if (columns && (typeof columns === 'object')) {
          // 显示其他自定义头部
          const temp = columnOrder.map((field) => {
            if (columns.hasOwnProperty(field)) {
              return columns[field];
            }
            return field;
          });

          content.push(temp.join(separator));
        } else {
          content.push(columnOrder.join(separator));
        }
      }

      datas.map(v => {
        return columnOrder.map(k => {
          if (typeof v[k] !== 'undefined') {
            return v[k];
          }
          return '';
        });
      }).forEach(v => {
        content.push(v.join(separator));
      });
    }
  } else if (typeof datas === 'object') {
    for (const field in datas) {
      if (columns && columns.hasOwnProperty(field)) {
        content.push(`${columns[field]},${datas[field]}`)
      } else {
        content.push(`${field},${datas[field]}`)
      }
    }
  } else {
    return datas;
  }

  return content.join('\r\n');
}
