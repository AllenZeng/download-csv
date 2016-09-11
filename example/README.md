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


you can use `npm i && npm start` to run the demo in `localhost:3000`


