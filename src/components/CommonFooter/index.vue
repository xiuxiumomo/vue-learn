<template>
    <div id="common-footer">尾部</div>
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
#common-footer{
    background-color: #ccc;
    height: 200px;
}
</style>
