<template>
    <nav class="sider-navbar" ref="scrollbar">
        <section class="sider-navbar-scroll">
            <div class="avatar">
                <span class="avatar-img">
                    <img src="/static/images/avatar.png" width="40" alt="">
                </span>
                <div class="avatar-info">
                    <span class="name">大兵</span>
                    <span class="depart">信息技术管理员 <i class="el-icon-arrow-down"></i></span>
                </div>
            </div>
            <h2 class="sider-navbar__h2">工作台</h2>
            <el-row class="tac">
                <!--:default-openeds="['2']"-->

                <el-menu
                    :default-active="activeIndex"
                    :router="true"
                    @select="handleSelect"
                    class="el-menu-vertical-demo"
                >
                    <el-menu-item :index="it.index" :key="index" v-for="(it,index) in SiderMenus">
                        <i class="material-icons" :style="{color : it.color}">{{it.icon}}</i>
                        <span slot="title">{{it.title}}</span>
                    </el-menu-item>
                </el-menu>

            </el-row>
        </section>
    </nav>
</template>

<script>
    import SiderMenus from './sider-menus'
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
                activeIndex: this.$route.path,
                SiderMenus,
            }
        },
        created() {
        },
        mounted() {
            new BScroll(this.$refs.scrollbar, {
                scrollbar: true,
                mouseWheel: true,
            });
        },
        methods: {
            handleSelect() {
            }
        }
    }
</script>
