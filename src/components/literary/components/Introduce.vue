<template>
  <div>

    <div class="content">
        <div class="introduce-top">
        <div class="introduce-left">
          <span class="iconfont">&#xe625;</span>
          <p>欢迎来到文苑漫步</p>
        </div>
          <div class="introduce-tougao">
          <mt-button size="small" class="tougao" @click="handlebtn">投稿</mt-button>
        </div>
        <img :src="icont" alt="" width="100%" height="200">
        <div class="z-">
          <span> {{motto}} </span>
        </div>
      </div>

      <div class="introduce-bottom">
        <h4>---每日推荐---</h4>
        <div class="desc">
            <p> {{content}} </p>
            <img src="//img.zcool.cn/community/01dc215d85aaf7a8012060be39b6c5.jpg@1280w_1l_2o_100sh.jpg" alt="" width="100%">
        </div>
      </div>
      <div class="literary-container">
        <span class="text-reminder">请在输入框中输入您的信息与文章内容</span>
        <textarea name="" id="text" cols="46" rows="10" v-model="inputValue" class="text"></textarea>
        <mt-button
          type="primary"
          size="large"
          class="literary-btn"
          @click="handleBtnClick"
        >上传稿件</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Indicator, MessageBox, Button } from 'mint-ui'
export default {
  name: 'LiteraryInt',
  components: {
    MessageBox,
    Button
  },
  data () {
    return {
      inputValue: '',
      content: '外面的花，开始了挣扎。东风来了，却已经用尽了全力，然后就开始和大地有了距离。也许是东风感到了疲惫，也许是东风很累，想要休息，想要留下一段时光的静谧，留给自己。许许多多的花儿已经开始凋零，只是那些几乎看不见的果实，隐藏在树上，留下了希望。这就是岁月的演绎，也是日子里面的涟漪；但是，那些花香，还是继续芬芳，却在慢慢荡漾着说不尽的惆怅。因为就是昨天，或者就是前天，那些花儿的红颜，留下了多少人牵念。而今天，却没有了东风的依恋，有的只是岁月里面的蜿蜒，还有时光的留念。',
      motto: '书籍是人类进步的阶梯',
      icont: require('../../../../static/imgs/img1.jpg')
    }
  },
  methods: {
    handlebtn () {
      MessageBox('', '终于等到你来投稿了')
    },
    handleBtnClick () {
      if (this.inputValue === '') {
        MessageBox('提示', '提交内容不能为空')
      } else {
        Indicator.open()
        setTimeout(() => {
          Indicator.close()
        }, 2000)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    margin-top: 40px;
    margin-bottom: 10px;
    .introduce-top {
      width: 100%;
      height: 250px;
      position: relative;
      .introduce-left {
        width: 100%;
        height: 33px;
        margin-top: 42px;
        .iconfont {
          font-family: "iconfont" !important;
          font-size: 22px;
          font-style: normal;
          color: #55beea;
        }
        p {
          position: absolute;
          left: 28px;
          top: 10px;
        }
      }
      .introduce-tougao {
          position: absolute;
          right: 0;
          top: 0;
          .tougao {
              background-color: #eee;
          }
      }
      .z- {
        z-index: 99;
        position: absolute;
        left: 0;
        top: 33px;
        width: 100%;
        height: 200px;
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9));
        // background: rgba(0, 0, 0, 0.3);
        span {
            display: block;
            margin: 90px auto;
            color: #fff;
            text-align: center;
        }
      }
    }
    .introduce-bottom {
        width: 100%;
        height: 360px;
        h4 {
            text-align: center;
        }
        .desc {
            box-sizing: border-box;
            width: 100%;
            height: 200px;
            padding: 10px;
            padding-right: 10px;
            margin-top: 15px;
            border-top: 1px solid #eee;
            position: relative;
            letter-spacing: 1.5px;
            border-radius: 4px;
            p {
                color: #858383;
                background-color: #eee;
                box-sizing: border-box;
                padding: 2px;
            }
            img {
                position: relative;
                top: 28px;
            }
        }
    }
    .literary-container {
        margin-top: 35px;
        .text-reminder {
          display: block;
          border: 1px solid #000;
          box-shadow: 0px 0px 8px #333;
          border-radius: 4px;
          margin-bottom: 4px;
          text-align: center;
          .literary-btn {
            margin-top: 10px;
          }
        }
    }
}
</style>
