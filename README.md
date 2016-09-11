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

// in your project call this function
// like this
downloadCsv(datas, columns, exportFileName);

```

## Options

`datas`: download datas support object and array(see the demo to check details)<br>
`columns`: download file column header title(default value: `datas` keys value)
`exportFileName`: export file name (default value : `export.csv`, please include the file extension)

## demo

[see the usage demo](https://github.com/AllenZeng/download-csv/blob/master/example)
