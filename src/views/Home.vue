<template>
    <!--메인화면-->
    <el-main class="about" id="about">
        <h1><i class="el-icon-location"></i> 메인 </h1>
        <el-carousel :interval="4000" type="card" height="60vh" style="position:relative; background:white;">
            <el-carousel-item v-for="(item, key) in tableData.length" :key="item">
                <!-- item은 1~tableData.lenth까지 tableData는 0~tableData.lenth-1-->
                <div v-if="item == (key+1)" id="card">
                    <div id="a">
                        <!--온도 22~24 / 습도 40~70 / 미세먼지 0.15 16.50 51.100-->
                        <div v-if="(tableData[key].table1 <= 24 && tableData[key].table1 >= 22) && (tableData[key].table3 >= 0 && tableData[key].table3 <= 15)  " id="good" >좋음</div>
                        <div v-else-if="tableData[key].table1 <= 24 && tableData[key].table1 >= 20 " id="soso">보통</div>
                        <div v-else id="bad">나쁨</div>
                    </div>
                    <div id="b">{{tableData[key].room}} <span>( 온도/습도/미세먼지 )</span></div>
                    <div id="c">{{tableData[key].table1}} ℃</div>
                    <div id="d">{{tableData[key].table2}} %</div>
                    <div id="e">{{tableData[key].table3}} ㎕/㎥</div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </el-main>


</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {


    }


</script>

<script>
</script>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    room: '1생활관',
                    table1: 22,
                    table2: 30,
                    table3: 0,
                }, {
                    room: '2생활관',
                    table1: 22,
                    table2: 80,
                    table3: 2,
                }, {
                    room: '3생활관',
                    table1: 20,
                    table2: 67,
                    table3: 5,
                }, {
                    room: '4생활관',
                    table1: 21,
                    table2: 70,
                    table3: 10,
                }, {
                    room: '5생활관',
                    table1: 22,
                    table2: 70,
                    table3: 16,
                }, {
                    room: '6생활관',
                    table1: 24,
                    table2: 66,
                    table3: 2,
                }, {
                    room: '7생활관',
                    table1: 5,
                    table2: 65,
                    table3: 5,
                }]
            }
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
    #about{
        text-align:left;
    }
    .el-icon-location{
        font-size:28px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    sub{
        line-height:0.2;
        font-size:15px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    #a{
        height:40vh;
        width:100%;
        display:table;

    }
    #b,#c,#d,#e{
        height:5vh;
        text-align:center;
        background:wheat;
        font-weight:bold;

    }
    #b{
        background:#3ba776;
        font-weight:bold;
        font-size:20px;
        line-height:2;
        color:white;
    }
    #good,#soso,#bad {
        width: 100%;
        height: 100%;
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        font-size: 3em;
        text-shadow:2px 2px white;
        font-weight:bold;
    }
    #good{
        background:#99ff99;
    }
    #soso{
        background:dodgerblue;
    }
    #bad{
        background:firebrick;
    }
    span{
        font-size:12px;
        font-weight:normal;
    }
</style>

