import warningSetting from './getters/warningSetting'//预警设置
import warningStatis from './getters/warningStatis'//预警设置
import stillLook from './getters/stillLook'//预警设置
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  ...warningSetting,
  ...stillLook,
  ...warningStatis
}
export default getters
