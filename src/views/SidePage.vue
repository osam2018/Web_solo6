<template>
    <!--관리모드화면-->
    <el-main class="about" id="about">
        <h1><i class="el-icon-setting"></i> 관리모드 </h1>
        <div class="text"><i class="el-icon-check"></i> 에어컨 자동제어</div>
        <el-switch
                v-model="value2"
                active-color="green"
                inactive-color="gray"

                >
        </el-switch>

        <div class="text" v-if="value2 == true"><i class="el-icon-check"></i> 에어컨 생활관제어</div>
        <el-select v-model="value" placeholder="Select" v-if="value2 == true" >
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <div class="text" v-if="value2 == true"><i class="el-icon-check"></i> 에어컨 온도제어 <sub>(최고/최저)</sub></div>
        <div class="block" v-if="value2 == true">
            <el-slider class="slider"
                    v-model="value9"
                    range
                    show-stops
                    :max="26" :min="19">
            </el-slider>
        </div>
        <el-button type="primary" id="submit" @click="open6">적용</el-button>

    </el-main>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {}


</script>

<style>

</style>

<script>
    export default {
        data() {
            return {
                value2: false,
                value9: [20,24],
                options: [{
                    value: 'all',
                    label: '전체'
                }, {
                    value: 'Option1',
                    label: '1생활관'
                }, {
                    value: 'Option2',
                    label: '2생활관'
                }, {
                    value: 'Option3',
                    label: '3생활관'
                }, {
                    value: 'Option4',
                    label: '4생활관'
                }],
                value: '전체',

            }
        },
        methods: {
            open6() {
                this.$confirm('설정을 변경하시겠습니까?', '에어컨 제어', {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '적용',
                    cancelButtonText: '취소'
                })
                    .then(() => {
                        this.$message({
                            type: 'info',
                            message: '변경을 적용하였습니다.'
                        });
                    })
                    .catch(action => {
                        this.$message({
                            type: 'info',
                            message: action === 'cancel'
                                ? '변경을 취소하였습니다.'
                                : '변경을 취소하였습니다.'
                        })
                    })
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
    div{
        margin-top:20px;
    }
    .el-icon-date{
        font-size:28px;
    }
    .text{
        font-size:20px;
        color:#181818;
    }
    .slider{
      margin-left:5px;
    }
    #submit{
        width:100%;
        height:50px;
        margin-top:2%;
        font-size:20px;
    }
    .el-icon-setting{
        font-size:28px;
    }
    sub{
        font-size:15px;
    }
    .el-icon-check{
        color:limegreen;
    }
</style>