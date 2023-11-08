<template>
    <div class=" ">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#2c3e50"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="1"
                ><p class="headtitle" style="color: #fff;font-size: large;">
                    碳源汇在线处理服务平台
                </p></el-menu-item
            >
            <el-submenu index="2">
                <template slot="title">处理中心</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>

            <!-- 右侧头像框 -->
            <el-dropdown @command="handleCommand" menu-align="start">
                <img :src="baseImgPath + adminInfo.avatar" class="avator" />
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="home">首页</el-dropdown-item>
                    <el-dropdown-item command="signout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu>
    </div>
</template>

<script>
import { signout } from "@/api/getData";
import { mapActions, mapState } from "vuex";
import { baseImgPath } from "@/config/env";
export default {
    data() {
        return {
            activeIndex: "1",
            activeIndex2: "1",
            baseImgPath
        };
    },
    computed: {
        ...mapState(["adminInfo"])
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        async handleCommand(command) {
            if (command == "home") {
                this.$router.push("/manage");
            } else if (command == "signout") {
                const res = await signout();
                if (res.status == 1) {
                    this.$message({
                        type: "success",
                        message: "退出成功"
                    });
                    this.$router.push("/");
                } else {
                    this.$message({
                        type: "error",
                        message: res.message
                    });
                }
            }
        }
    }
};
</script>

<style lang="less">
@import "../style/mixin";

.header_container {
    background-color: #eff2f7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
}

.avator {
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
}

.el-dropdown-menu__item {
    text-align: center;
}

.el-dropdown {
    display: inline-block;
    position: relative;
    color: #606266;
    font-size: 14px;
    //  向右侧浮动
    float: right;
    padding-top: 10px;
    // 清除浮动
    overflow: hidden;
}
</style>
