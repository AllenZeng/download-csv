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
  return '检测异常';
}
