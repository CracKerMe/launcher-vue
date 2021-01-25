export const SpCusCookie = {
  setCookie (name, value, days, isZero) {
    let date = new Date()
    let expires = ''
    days = Number(days)
    if (days) {
      if (isZero) {
        var curTemp = date.getTime()
        var curWeekHours = new Date(date.toLocaleDateString()).getTime() - 1
        var passedTimeStamp = curTemp - curWeekHours
        var leftTimeStamp = 24 * 60 * 60 * 1000 - passedTimeStamp
        var leftTime = new Date()
        if (days < 1) {
          leftTime.setTime(leftTimeStamp + curTemp + days * 24 * 60 * 60 * 1000)
        } else {
          leftTime.setTime(leftTimeStamp + curTemp + (days - 1) * 24 * 60 * 60 * 1000)
        }
        expires = '; expires=' + leftTime.toGMTString()
      } else {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = '; expires=' + date.toGMTString()
      }
    }
    document.cookie = name + '=' + value + expires + '; path=/'
  },
  getCookie (name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  },
  deleteCookie (name, domain) {
    // document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    var date = new Date()
    date.setTime(date.getTime() - 10000) // 删除一个cookie，就是将其过期时间设定为一个过去的时间
    document.cookie = name + "= ' ' " + '; expires=' + date.toUTCString() + '; path=/' + (domain ? '; domain=' + domain : '')
  }
}
export const localhostStorageFn = {
  set (key, value) {
    var curTime = new Date().getTime()
    localStorage.setItem(key, JSON.stringify({data: value, time: curTime}))
  },
  get (key, exp, callback) {
    let dataObjDatatoJson = []
    var data = localStorage.getItem(key)
    if (data) {
      var dataObj = JSON.parse(data)
      if (!exp) {
        dataObjDatatoJson = dataObj.data
        return dataObjDatatoJson
      }
      if (new Date().getTime() - dataObj.time > exp) {
        console.log('信息已过期')
        this.remove(key)
        callback && callback()
        // your callbak here
      } else {
        dataObjDatatoJson = dataObj.data
        return dataObjDatatoJson
      }
    }
  },
  remove (key) {
    localStorage.removeItem(key)
  }
}
