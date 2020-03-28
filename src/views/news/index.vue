<template>
    <div class="news inner-container">新闻

       
    </div>
</template>
<script>
export default {
    name: 'news',
    mounted() {
        this.getListData()
    },
    methods: {
        async getListData() {
            let res = await this.$store.dispatch('newsGetList',{});
            console.log(res);
        }
    }
}
</script>
<style lang="less" scoped>

</style>