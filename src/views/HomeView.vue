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
                <li>
                  <img src="../assets/Java/java1.webp" alt="" />
                  <a href="#">详细讲解Java中的注解与反射</a>
                  <p>
                    注解和反射是 Java
                    中非常强大的特性，它们可以帮助开发人员实现很多高级功能。
                    但是，使用反射也有一些缺点，如性能开销较大、代码可读性较差等，
                    因此应该谨慎使用。
                  </p>
                </li>
                <li>
                  <img src="../assets/FrontEnd/Vue1.webp" alt="" />
                  <a href="#">与Vue2相比Vue3的优缺点</a>
                  <p>这是文章 2 的简介。</p>
                </li>
                <li>
                  <img src="../assets/Algorithm/dp.webp" alt="" />
                  <a href="#">动态规划（从入门到精通）</a>
                  <p>这是文章 3 的简介。</p>
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
      ]
    }
  },
  created () {},
  components: {
    HeaderComponents
  },
  methods: {},
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
.el-menu-demo {
  border: none;
  display: flex;
  justify-content: space-evenly;
}
.headerimg {
  width: 100%;
  height: 140px;
  background: url('../assets/Backgroundm/headerimg.png') no-repeat;
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
  font-size: 14px;
  color: #666;
  margin-top: -30px;
  margin-left: 200px;
  position: absolute;
  word-wrap: break-word;
  word-break: break-all;
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
</style>
