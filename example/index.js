import React, { Component } from 'react';
import { render } from 'react-dom';

var creatCSVFile = require('../dist/creatCSVFile');
var downloadFile = require('../dist/downloadFile');

export class Index extends Component {
  btnClick() {
    const datas = [
      { name: 'test1', score: 1, cate: 23 },
      { name: 'test2', score: 2 },
      { name: 'test3', score: 3 },
      { name: 'test4', score: 4 },
      { name: 'test5', score: 5 },
      { name: 'test6', score: 6 },
      { name: 'test7', score: 7 },
    ];

    const columns = { name: '姓名', score: '分数' };

    const datas2 = { name: 'test1', score: 1 };

    downloadFile(creatCSVFile(datas, columns));
  }

  render() {
    return (
      <div>
        <h1>hello test</h1>
        <button onClick={() => this.btnClick()}>download csv</button>
      </div>
    );
  }
}

const RootElement = document.createElement('div');
document.body.appendChild(RootElement);

render(
  <Index />,
  RootElement
);
