<template>
  <div>
    <div v-for="item in posts" :key="item.id">
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [
        { id: 1, title: '我的第一篇博客', content: '这是我第一篇博客内容...' },
        {
          id: 2,
          title: 'Vue.js 学习心得',
          content: '今天我学到了 Vue 的基础知识...'
        },
        {
          id: 3,
          title: '聊聊前端开发',
          content: '前端开发是一个非常有趣的领域...'
        }
      ]
    }
  },
  created () {}
}
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
