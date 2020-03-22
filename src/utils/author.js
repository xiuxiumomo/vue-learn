const SIDEBAR = 'sidebar';
import Cookies from 'js-cookie';
//获取nav开关状态
export function getSideBar() {
    return Cookies.get(SIDEBAR)
}
export function setSideBar(val) {
    return Cookies.set(SIDEBAR,val)
}