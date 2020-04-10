
function getZero(num) {
    return num < 10 ? ('0' + num) : num;
}
export function getCurrTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    month = getZero(month);
    day = getZero(day);
    hour = getZero(hour);
    minute = getZero(minute);
    second = getZero(second);
    let time = year + '/' + month + '/' + day + '   ' + hour + ':' + minute + ':' + second;
    return time;

}

export function CheckPassWord(password) {
    //必须为字母加数字且长度不小于8位
    var str = password;
    if (str == null || str.length < 8) {
        return false;
    }
    var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
    if (!reg1.test(str)) {
        return false;
    }
    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}
export function CheckUrl(url) {
    var regUrl = new RegExp(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return regUrl.test(url);
}
//回弹操作
export function debounce(func, wait, immediate) {
    let timeout, args, context, timestamp, result

    const later = function () {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp

        // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args)
                if (!timeout) context = args = null
            }
        }
    }

    return function (...args) {
        context = this
        timestamp = +new Date()
        const callNow = immediate && !timeout
        // 如果延时不存在，重新设定延时
        if (!timeout) timeout = setTimeout(later, wait)
        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }

        return result
    }
}

function color16(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    return color;
}
//生成颜色数组
export function colorList() {
    let len = 200;
    let res = []
    for(let i =0;i<len;i++) {
        let color = color16();
        res.push(color)
    }
   
    return res
}


