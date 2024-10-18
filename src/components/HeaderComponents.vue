<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="ViewHome">首页</el-menu-item>
      <el-menu-item index="2" @click="ViewBlog">个人博客</el-menu-item>
      <el-submenu index="3">
        <template slot="title">我的学习笔记</template>
        <el-menu-item index="3-1" @click="ViewNoteJava">JAVA</el-menu-item>
        <el-menu-item index="3-2" @click="ViewFrontEnd">前端</el-menu-item>
        <el-menu-item index="3-3" @click="ViewCpp">C++</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">算法</template>
          <el-menu-item index="3-4-1" @click="ViewSim">模拟</el-menu-item>
          <el-menu-item index="3-4-2" @click="ViewHeight">高精度</el-menu-item>
          <el-menu-item index="3-4-3" @click="ViewSort">排序</el-menu-item>
          <el-menu-item index="3-4-4" @click="ViewSearch">搜索</el-menu-item>
          <el-menu-item index="3-4-5" @click="ViewDp">动态规划</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="4" @click="ViewExperience"
        >个人学习经历</el-menu-item
      >
      <el-menu-item index="5" @click="ViewMessage">留言板</el-menu-item>
    </el-menu>
  </el-header>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '0'
    }
  },
  created () {
    switch (this.$route.path) {
      case '/':
        this.activeIndex = '1'
        break
      case '/post':
        this.activeIndex = '2'
        break
      case '/note':
        this.activeIndex = '3'
        break
      case '/experience':
        this.activeIndex = '4'
        break
      case '/message':
        this.activeIndex = '5'
        break
      default:
        // 如果路径不匹配以上两个，可根据需求设置默认值或不做任何操作
        break
    }
  },
  methods: {
    ViewExperience () {
      if (this.$route.path === '/experience') {
        return
      }
      this.$router.push('/experience')
    },
    ViewMessage () {
      if (this.$route.path === '/message') {
        return
      }
      this.$router.push('/message')
    },
    ViewDp () {
      if (this.$route.path === '/note/Algorithm/dp') {
        return
      }
      this.$router.push('/note/Algorithm/dp')
    },
    ViewSearch () {
      if (this.$route.path === '/note/Algorithm/searchLearn') {
        return
      }
      this.$router.push('/note/Algorithm/searchLearn')
    },
    ViewSort () {
      if (this.$route.path === '/note/Algorithm/sortLearn') {
        return
      }
      this.$router.push('/note/Algorithm/sortLearn')
    },
    ViewHeight () {
      if (this.$route.path === '/note/Algorithm/HighPrecision') {
        return
      }
      this.$router.push('/note/Algorithm/HighPrecision')
    },
    ViewSim () {
      if (this.$route.path === '/note/Algorithm/Simulation') {
        return
      }
      this.$router.push('/note/Algorithm/Simulation')
    },
    ViewCpp () {
      if (this.$route.path === '/note/cpp') {
        return
      }
      this.$router.push('/note/cpp')
    },
    ViewFrontEnd () {
      if (this.$route.path === '/note/frontend') {
        return
      }
      this.$router.push('/note/frontend')
    },
    ViewNoteJava () {
      if (this.$route.path === '/note/java') {
        return
      }
      this.$router.push('/note/java')
    },
    ViewHome () {
      if (this.$route.path === '/') {
        return
      }
      this.$router.push('/')
    },
    ViewBlog () {
      if (this.$route.path === '/post') {
        return
      }
      this.$router.push('/post')
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      // this.activeIndex = key
    }
  }
}
</script>
<style scoped>
.el-menu-demo {
  border: none;
  display: flex;
  justify-content: space-evenly;
}
</style>
