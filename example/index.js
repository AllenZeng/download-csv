import React, { Component } from 'react';
import { render } from 'react-dom';
import downloadCsv from 'download-csv';
// import downloadCsv, { creatCsvFile, downloadFile, detectionClientType } from '../index.js';

export class Index extends Component {
  downloadArrayData() {
    const datas = [
      { name: 'test1', score: 1, level: 'Z' },
      { name: 'test2', score: 2 },
      { name: 'test3', score: 3 },
      { name: 'test4', score: 4 },
      { name: 'test5', score: 5 },
      { name: 'test6', score: 6 },
      { name: 'test7', score: 7 },
    ];

    const columns = { name: '姓名', score: '分数' };

    downloadCsv(datas, columns);
  }

  downloadObjectData() {
    const dataoObject = { name: 'test1', score: 1, level: 'Z' };
    const columns = { name: '姓名', score: '分数' };

    downloadCsv(dataoObject, columns);
  }

  render() {
    return (
      <div>
        <h1>hello test</h1>
        <button onClick={() => this.downloadArrayData()}>download arraydata</button>
        <button onClick={() => this.downloadObjectData()}>download objectData</button>
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
