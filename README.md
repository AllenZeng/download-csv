# download-csv
a funtion to download csv file

## Browser Compatible
this modlue dependent on `a` tag attribute `download`, so that some Browser can not use.<br>
[see the browser compatible](http://caniuse.com/#search=download)<br>
tips: in safari the file will download success but you must change the file extension to `.csv`;

## Install

```bash
npm install download-csv --save
```

## Usage

```js
import downloadCsv from 'download-csv';

// in your project, like this
downloadCsv(datas, columns, exportFileName);

```

## Options

`datas`: download datas support object and array(see the demo to check details)<br>
`columns`: download file column header title(default value: `datas` keys value)<br>
`exportFileName`: export file name (default value : `export.csv`, please include the file extension)

## Other

tool function

```js
import { creatCsvFile, downloadFile, detectionClientType } from 'download-csv';

creatCsvFile(datas, columns); // return csvfile
downloadFile(csvfile, exportFileName); // browser download file
detectionClientType(); // return { name: 'browser name', version: 'browser version' };

```

## Support array data and object type data download

## array data

```js
const datas = [
  { name: 'test1', score: 1, level: 'Z' },
  { name: 'test2', score: 2 },
  { name: 'test3', score: 3 },
  { name: 'test4', score: 4 },
];

const columns = { name: '姓名', score: '分数' };

downloadCsv(datas, columns);
```

the download file like this:<br>

|  姓名 | 分数  | level |
| :---: | :---: | :---: |
| test1 |   1   |   Z   |
| test2 |   2   |       |
| test3 |   3   |       |
| test4 |   4   |       |

## object data

```js
const datas = { name: 'test1', score: 1, level: 'Z' }

const columns = { name: '姓名', score: '分数' };

downloadCsv(datas, columns);
```

the download file like this:<br>

|  姓名 | test1 |
| :---: | :---: |
|  分数 |   1   |
| level |   Z   |

## Demo

[see the usage demo](https://github.com/AllenZeng/download-csv/blob/master/example)

