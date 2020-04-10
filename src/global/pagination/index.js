import pagination from './pagination';

const globalPagination = {
    install:function(Vue) {
        Vue.component('globalPagination', pagination)
    }
}

export default globalPagination;