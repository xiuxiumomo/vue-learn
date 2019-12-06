<template>
    <div>
        <div v-show="showType == 1">
            <content-loader
                :height="80"
                :width="400"
                :speed="2"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
                <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
                <rect x="70" y="55" rx="3" ry="3" width="255" height="6.4" />
                <circle cx="30" cy="35" r="30" />
            </content-loader>
        </div>
        <div v-show="showType == 2">
            <content-loader
                :height="80"
                :width="400"
                :speed="2"
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >
                <rect x="0" y="4" rx="3" ry="3" width="220" height="8.4" />
                <rect x="0" y="20" rx="3" ry="3" width="240" height="8.4" />
                <rect x="0" y="40" rx="3" ry="3" width="260" height="8.4" />
                <rect x="0" y="60" rx="3" ry="3" width="320" height="8.4" />
            </content-loader>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
    ContentLoader,
    FacebookLoader,
    CodeLoader,
    BulletListLoader,
    InstagramLoader,
    ListLoader
} from "vue-content-loader";
export default {
    name: "list-loading",
    components: {
        ContentLoader
    },
    props: {
        type: {
            default: 2,
            type: Number
        }
    },
    computed: {
        ...mapGetters({}),
        showType() {
            let { type } = this;
            return type;
        }
    },
    data() {
        return {};
    },
    mounted() {},

    methods: {}
};
</script>

<style scoped lang="less"></style>
