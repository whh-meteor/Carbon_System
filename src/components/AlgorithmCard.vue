<template>
    <div style="margin-left: 5%;">


        <el-row>

            <el-col :span="7">
                <el-card :body-style="{ padding: '0px' }" class="elcard">
                    <div @click="CVA">
                        <img src="../assets/img/pca-kmeans.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>CVA变化强度计算</span>
                            <div class="bottom clearfix">
                                <!-- <time class="time">{{ currentDate }}</time> -->
                                <time class="time">变化检测步骤之一，计算两期影像变化强度图像</time>
                                <el-button type="text" class="button"><el-link>查看<i class="el-icon-view el-icon--right"></i>
                                    </el-link></el-button>
                            </div>
                        </div>
                    </div>

                </el-card>
                
            </el-col>
            
            <el-col :span="7" style="margin-left: 20px;">
                <el-card :body-style="{ padding: '0px' }" class="elcard">
                    <div @click="SoilErosionK">
                        <img src="../assets/img/k.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>土壤侵蚀度计算</span>
                            <div class="bottom clearfix">
                                <time class="time">入参TIF数据包含四个：砂、粉砂、粘土和有机碳。</time>
                                <el-button type="text" class="button"><el-link>查看<i class="el-icon-view el-icon--right"></i>
                                    </el-link></el-button>
                            </div>
                        </div>
                    </div>

                </el-card>
                
            </el-col>
            <el-col :span="7" style="margin-left: 20px;">
                <el-card :body-style="{ padding: '0px' }" class="elcard">
                    <div @click="out2excel">
                        <img src="../assets/img/excel.jpg" class="image">
                        <div style="padding: 14px;">
                            <span>解析SWMM模型out文件</span>
                            <div class="bottom clearfix">
                                <time class="time">二进制文件转xlsx</time>
                                <el-button type="text" class="button"><el-link>查看<i class="el-icon-view el-icon--right"></i>
                                    </el-link></el-button>
                            </div>
                        </div>
                    </div>

                </el-card>
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date()
        };
    },
    methods: {
        CVA() {
            this.$router.push("/CVA")
        },
        SoilErosionK() {
            this.$router.push("/SoilErosionK")
        },
        out2excel(){
            this.$router.push("/out2excel")
        }
    }
}
</script>

<style scoped>
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}


.elcard:hover {

    transform: scale(110%, 110%);

}
</style>