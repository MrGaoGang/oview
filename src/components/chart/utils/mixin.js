export default {
    props: {
        animation: Object,
        options: Object, //一些额外的配置
    },
    methods: {
        gotoChart(type) {
            this.$nextTick(() => {
                this.$parent.setChart(type, Object.assign({}, this.$props));
            });
        }
    },

}