<template>
    <div id="common-header">头部</div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "pagename",
        components: {},
        computed: {
            ...mapGetters({

            })
        },
        data() {
            return {}
        },
        mounted() {
        },
        
        methods: {}
    }
</script>

<style scoped lang="less">
#common-header{
    height: 200px;
    background-color: #ccc;
}
</style>
