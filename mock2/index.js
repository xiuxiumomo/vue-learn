import Mock from 'mockjs'
var random = Mock.Random; 
const login = function() {
    return {
        code: 200,
        data: {
            token: random.string(16)
        }
    }
}
let userLoginData = login();
Mock.mock(/\/user\/login/, 'post', {...userLoginData})
export default Mock