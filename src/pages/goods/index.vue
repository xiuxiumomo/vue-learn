<template>
    <div class="goods">
        <!-- <div class="item" v-for="item in list" :key="item">
          
        </div> -->
        goods
        
        <list-loading ></list-loading>
        <list-loading :type="1"></list-loading>
      
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListLoading from '@/components/ListLoading'
export default {
    name: "goods",
    components: {
        ListLoading
    },
    computed: {
        ...mapGetters({})
    },
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        };
    },
    mounted() {},

    methods: {}
};
</script>

<style scoped lang="less">
.goods {
    height: 100vh;

    .item {
        height: 100px;
        border-bottom: 1px solid #000;
        line-height: 100px;
    }
}
</style>
