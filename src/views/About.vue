<template>
<!--생활관현황화면-->
    <el-main class="about" id="about">
        <h1><i class="el-icon-date"></i> 생활관 현황 </h1>
      <el-table
            :data="tableData"
            border
            id="table">
        <el-table-column
                prop="room"
                label="생활관"
                max-width="300px" >
        </el-table-column>
        <el-table-column
                prop="table1"
                label="온도 (℃)"
                >
        </el-table-column>
        <el-table-column
                prop="table2"
                label="습도 (%)"
                >
        </el-table-column>
        <el-table-column
                prop="table3"
                label="미세먼지 (㎕/㎥)"
                >
        </el-table-column>
    </el-table>
    </el-main>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    @Component({

    })

    export default class About extends Vue {
    }
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
    #table{
        margin-top:20px;
    }
    .el-icon-date{
        font-size:28px;
    }
   sub{
       line-height:0.2;
       font-size:15px;
   }

</style>



