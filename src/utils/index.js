/**
 * 获取客户端类型 
 * 返回值： h5 isAndrios isIOS
 */
export function getClient() {
    let client = '';
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //IOS端
    if(isAndroid) {
        client = 'isAndroid'
    }else if(isIOS){
        client = 'isIOS'
    }else{
        client = 'h5'
    }
    return client;
   
}