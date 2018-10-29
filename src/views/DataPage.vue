<template>
<!--생활관평균화면-->
    <el-main class="data-page" id="data-page">
        <h1><i class="el-icon-menu"></i> 중대 평균</h1>
        <div class="bar">
        <my-bar  style="height:500px; width:500px; "></my-bar>
        </div>
    </el-main>
</template>



<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import MyBar from '@/components/MyBar';


    @Component({
        components:{
            MyBar
        }
    })
    export default class DataPage extends Vue {

    }

</script>



<style scoped>

    #data-page{
        text-align:left;
    }
    .el-icon-menu{
        font-size:28px;
    }
    .text{
        margin:5% 0 2% 0;
    }
    sub{
        line-height:0.2;
        font-size:15px;
    }
    .bar{
        border:1px solid black;
        display:inline-block;
    }
</style>