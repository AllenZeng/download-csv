module.exports = () => {
  const Sys = {};
  const ua = navigator.userAgent.toLowerCase();
  let s;

  (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
  (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
  (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
  (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
  (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;

  // 以下进行测试
  if (Sys.ie) return { name: 'IE', version: Sys.ie };
  if (Sys.firefox) return { name: 'Firefox', version: Sys.firefox };
  if (Sys.chrome) return { name: 'Chrome', version: Sys.chrome };
  if (Sys.opera) return { name: 'Opera', version: Sys.opera };
  if (Sys.safari) return { name: 'Safari', version: Sys.safari };
  return { name: '' };
}

// function() {
//   var NV = {};
//   var UA = navigator.userAgent.toLowerCase();

//   try {
//     NV.name = !-[1, ] ? 'ie':
//     (UA.indexOf("firefox") > 0) ? 'firefox':
//     (UA.indexOf("chrome") > 0) ? 'chrome':
//     window.opera ? 'opera':
//     window.openDatabase ? 'safari':
//     'unkonw';
//   } catch(e) {};

//   try {
//     NV.version = (NV.name=='ie') ? UA.match(/msie ([\d.]+)/)[1] :
//     (NV.name=='firefox') ? UA.match(/firefox\/([\d.]+)/)[1] :
//     (NV.name=='chrome') ? UA.match(/chrome\/(\d+)/)[1] :
//     (NV.name=='opera') ? UA.match(/opera.([\d.]+)/)[1] :
//     (NV.name=='safari') ? UA.match(/version\/([\d.]+)/)[1] :
//     '0';
//   } catch(e) {}

//   try {
//     NV.shell = (UA.indexOf('360ee') >   -1) ? '360极速浏览器':
//     (UA.indexOf('baidu') > -1) ? '百度浏览器':
//     (UA.indexOf('qqbrowser') > -1) ? 'QQ浏览器':
//     (UA.indexOf('360se') > -1) ? '360安全浏览器':
//     (UA.indexOf('aoyou') > -1) ? '遨游浏览器':
//     (UA.indexOf('theworld') > -1) ? '世界之窗浏览器':
//     (UA.indexOf('worldchrome') > -1) ? '世界之窗极速浏览器':
//     (UA.indexOf('greenbrowser') > -1) ? '绿色浏览器':
//     (UA.indexOf('se') > -1) ? '搜狗浏览器':
//     '';
//   } catch(e) {}

//   console.log(NV);
// }