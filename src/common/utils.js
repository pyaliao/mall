export function debounce (func, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 此函数还可以继续扩展
export function formatDate (date, fmt) {
  // 匹配年份
  if (/(y+)/.test(fmt)) {
    // 字符串的replace方法，可以根据正则进行替换
    // replace产生一个新字符串而不会修改原字符串
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    // new一个正则对象，传入的参数是一个模板字符串
    if (new RegExp(`(${k})`).test(fmt)) {
      const tmp = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? tmp : ('00' + tmp).substr(tmp.length))
    }
  }
  return fmt
}
