<template>
    <div>

        <test1 :data-source="test1Data" @dataChange="dataChange"></test1>
        <div>组件外部的data==>:{{test1Data.name}}</div>
        <div><button @click="test1Fn()">组件外部点击查看test1Data</button></div>
    </div>
</template>

<script>

    import test1 from '@portal/views/component/components/component-test1.vue'
    export default {
        activated(){
            //激活
            console.log('激活模式');
        },
        deactivated(){
            //激活
            console.log('后台模式');
        },
        data(){
            return {
                test1Data:{name:'test1Data'}
            }
        },
        mounted(){
            console.log('页面第一次被加载');
        },
        methods: {
            test1Fn(){
                console.log(this.test1Data);
            },
            dataChange(value){
                this.test1Data.name = value;
            }
        },
        components:{
            test1
        }
    }
</script>
<style>
    body, html {
        width: 100%;
        height: 100%;
    }
</style>
