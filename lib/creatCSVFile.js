module.exports = (datas, columns = [], separator = ',') => {
  const newLine = '\r\n';
  let columnOrder = [];
  const content = [];

  datas.forEach(v => {
    if (!Array.isArray(v)) {
      columnOrder = columnOrder.concat(Object.keys(v));
    }
  });

  if (columnOrder.length > 0) {
    columnOrder = columnOrder.filter((value, index, self) => self.indexOf(value) === index);
    if (columns.length) {
      // 显示其他自定义头部
      const temp = columnOrder.map((field) => {
        for (const obj of columns) {
          if (field === obj.field) {
            return obj.name;
          }
        }
        return field;
      });

      content.push(temp.join(separator));
    } else {
      content.push(columnOrder.join(separator));
    }
  }

  if (Array.isArray(datas)) {
    datas.map(v => {
      if (Array.isArray(v)) {
        return v;
      }
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

  return content.join(newLine);
}
