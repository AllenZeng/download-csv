cosnt datas = [
  { name: 'test1', score: 1 },
  { name: 'test2', score: 2 },
  { name: 'test3', score: 3 },
  { name: 'test4', score: 4 },
  { name: 'test5', score: 5 },
  { name: 'test6', score: 6 },
  { name: 'test7', score: 7 },
];

const columns = [
  { name: '姓名', field: 'name' },
  { name: '分数', field: 'score' },
];

import downloadCsv from 'download-csv';

// use another columns title
downloadCsv(datas, columns);

/*
*  姓名   分数
* test1   1
* test2   2
* test3   3
* ...
*/

// default columns title
downloadCsv(datas);

/*
* name  score
* test1   1
* test2   2
* test3   3
* ...
*/
