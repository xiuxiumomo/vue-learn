import { MessageBox } from 'element-ui';
const globalMethods = {
    methods: {
        tipsMsgFn: function ({ message = '操作成功~', type = "success", duration = 1500 } = {}) {
            this.$message({
                message,
                type,
                duration
            });
        },

        operatFn: function ({
            message = '确定要这样操作吗?',
            sureTip = '确定',
            cancelTip = '取消'
        } = {}) {
            return new Promise((resolve, reject) => {
                MessageBox.confirm(message, '提示', {
                    confirmButtonText: sureTip,
                    cancelButtonText: cancelTip,
                    center: false
                }).then(() => {
                    resolve()
                }).catch(() => {
                    
                })
            })

        }

    }
};

export { globalMethods };
