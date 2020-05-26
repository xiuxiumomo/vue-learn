import app from "./getters/app"; // 全局
import integral from "./getters/integral"; // 积分模块
const getters = {
    ...app,
    ...integral
   
};
export default getters;
