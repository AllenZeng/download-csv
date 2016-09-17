# download-csv
a funtion to download csv file

## Browser Compatible
this modlue dependent on `a` tag attribute `download`, so that some Browser can not use.
[see the browser compatible](http://caniuse.com/#search=download)

## Install

```bash
npm install download-csv --save
```

## Usage

```js
import downloadCsv from 'download-csv';

// in your project call this function like this
downloadCsv(datas, columns, exportFileName);

```

## Options

`datas`: download datas support object and array(see the demo to check details)<br>
`columns`: download file column header title(default value: `datas` keys value)<br>
`exportFileName`: export file name (default value : `export.csv`, please include the file extension)


## support array data and object type data download

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

## demo

[see the usage demo](https://github.com/AllenZeng/download-csv/blob/master/example)
