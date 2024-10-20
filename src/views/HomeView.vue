<template>
  <div>
    <el-container>
      <header-components></header-components>
      <el-main>
        <div class="headerimg"></div>
        <div class="paintting">
          <ECharts class="chart" :option="option1"></ECharts>
          <ECharts class="chart" :option="option2"></ECharts>
        </div>
        <div class="choiceness">
          <el-container>
            <el-main
              ><h2>精选文章</h2>
              <ul>
                <li
                  v-for="item in Notelist"
                  :key="item.id"
                  @click="$router.push(item.detail)"
                >
                  <img :src="item.img" alt="" />
                  <a href="#">{{ item.name }}</a>
                  <p v-html="formattedNote(item.note)"></p>

                  <span class="iconfont">&#xe61d;10</span>
                  <span class="iconfont">&#xe666;20</span>
                  <span class="iconfont">&#xe633;30</span>
                </li>
              </ul></el-main
            >
            <el-aside width="200px">联系我</el-aside>
          </el-container>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import HeaderComponents from '@/components/HeaderComponents.vue'
export default {
  data () {
    return {
      data1: [
        {
          time: '周一',
          visitors: 1000
        },
        {
          time: '周二',
          visitors: 1200
        },
        {
          time: '周三',
          visitors: 1500
        },
        {
          time: '周四',
          visitors: 1800
        },
        {
          time: '周五',
          visitors: 2000
        },
        {
          time: '周六',
          visitors: 2200
        },
        {
          time: '周日',
          visitors: 2500
        }
      ],
      data2: [
        {
          note: 'Java',
          numbers: 5
        },
        {
          note: 'Python',
          numbers: 10
        },
        {
          note: 'C++',
          numbers: 15
        },
        {
          note: 'JavaScript',
          numbers: 20
        },
        {
          note: 'Vue',
          numbers: 25
        },
        {
          note: 'React',
          numbers: 30
        },
        {
          note: '算法',
          numbers: 35
        }
      ],
      Notelist: [
        {
          id: 1,
          name: '详解Java中的注解与反射',
          img: '../assets/Java/java1.png',
          note: '注解和反射是 Java中非常强大的特性，它们可以帮助开发人员实现很多高级功能。但是，使用反射也有一些缺点，如性能开销较大、代码可读性较差等，因此应该谨慎使用。',
          detail: '/note/java'
        },
        {
          id: 2,
          name: '与Vue2相比Vue3的新特性',
          img: '../assets/FrontEnd/vue1.png',
          note: '与Vue2相比Vue3的新特性有性能提升，更好的性能和更小的体积，更易于维护和扩展。',
          detail: '/note/frontend'
        },
        {
          id: 3,
          name: '动态规划（从入门到精通）',
          img: '../assets/Algorithm/dp.png',
          note: '动态规划是一种解决问题的思想，它将一个复杂的问题分解成若干个简单的子问题，然后通过求解子问题的最优解来得到原问题的最优解。动态规划的核心思想是将问题分解成若干个子问题，然后通过求解子问题的最优解来得到原问题的最优解。动态规划的核心思想是将问题分解成若干个子问题，然后通过求解子问题的最优解',
          detail: '/note/Algorithm/dp'
        }
      ],
      imgPath: ''
    }
  },
  created () {},
  components: {
    HeaderComponents
  },
  methods: {
    formattedNote (note) {
      if (note.length > 10) {
        let Part = ''
        for (let i = 0; i < note.length; i++) {
          Part += note[i]
          if (i % 50 === 0 && i !== 0 && i !== note.length - 1) {
            Part += '<br>'
          }
        }
        return Part
      }
      return note
    }
  },
  computed: {
    option1 () {
      return {
        title: {
          text: '网站访问量',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: this.data1.map(item => item.time)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.data1.map(item => item.visitors),
            type: 'line'
          }
        ]
      }
    },
    option2 () {
      return {
        title: {
          text: '笔记数量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '笔记数量',
            type: 'pie',
            radius: '50%',
            data: this.data2.map(item => ({
              value: item.numbers,
              name: item.note
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  watch: {}
}
</script>
<style scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../assets/icon/iconfont.ttf') format('truetype');
}
.el-menu-demo {
  border: none;
  display: flex;
  justify-content: space-evenly;
}
.headerimg {
  width: 100%;
  height: 140px;
  background: url('../assets/img/Backgroundm/headerimg.png') no-repeat;
}
.paintting {
  height: 400px;
  display: flex;
  justify-content: space-evenly;
}
.choiceness {
  padding: 20px;
  background-color: #f5f5f5;
}

.choiceness h2 {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

.choiceness ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.choiceness li {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  padding: 15px;
  border-radius: 5px;
}

.choiceness img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}

.choiceness.content {
  display: flex;
  flex-direction: column;
}

.choiceness a {
  font-size: 18px;
  color: #333;
  text-decoration: none;
  margin-top: -70px;
  margin-left: 30px;
  font-weight: bold;
}

.choiceness p {
  font-size: 16px;
  color: #666;
  margin-top: 30px;
  margin-left: 200px;
  position: absolute;
  line-height: 1.5; /* 设置行高为 1.5 倍字体大小，可根据需求调整这个值 */
  text-align: left; /* 确保文本左对齐 */
  text-indent: 2em; /* 首行缩进两个字符，相对于字体大小，可根据需要调整这个值 */
}
.choiceness span {
  left: -180px;
  margin-left: 30px;
  position: relative;
  bottom: -50px;
}
.choiceness .el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.choiceness .el-main {
  background-color: #9eaba1;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.three_icon {
  margin-top: 20px;
  margin-left: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
}
</style>
