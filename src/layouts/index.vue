<template>
    <div class="layout-container">
        <c-header v-show="showHeader"></c-header>
        <div class="content-container">
            <slot></slot>
        </div>
        <c-footer v-if="showFooter"></c-footer>
    </div>
</template>

<script>
import CFooter from "@/components/CommonFooter";
import CHeader from "@/components/CommonHeader";
export default {
    name: "Layout",
    components: {
        CFooter,
        CHeader
    },
    data() {
        return {
            
        };
    },
    computed: {
        showHeader() {
            let cRouter = this.$route.name;
            //根据相应的处理
            return true;
        },
        showFooter() {
            let cRouter = this.$route.name;
            //根据相应的处理
            return true;
        }
    },
    methods:{
       
    },
    mounted() {}
};
</script>

<style scoped lang="less">
.layout-container {
}
</style>
