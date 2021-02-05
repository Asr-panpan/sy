<template>
  <div class="index">
    <div class="index_tou">
      <div class="tou_zuo">
        <div class="zuo_tu">
          <img src="../assets/h5_index/形状结合.png" alt="" />
        </div>
      </div>
      <div class="tou_zhong">
        <img src="../assets/h5_index/logo_white.png" alt="" />
      </div>
      <div class="tou_di">
        <div class="di_tu"></div>
        <div class="di_zi">
          上海艾科赛思网络科技集团有限公司创立于2019年10月，注册资本金2000万，是一家中外合资企业，公司坐落于上海张江高科技园区
        </div>
      </div>
    </div>
    <div class="cpjz">
      <img src="../assets/h5_index/indetx_tiitle.png" alt="" />
    </div>
    <div class="akjhb">
      <div class="jhb_zuo">
        <img src="../assets/h5_index/矩形.png" alt="" />
      </div>
      <div class="jhb_you">
        <h3>艾科进货宝</h3>
        <p>
          艾科进货宝 -
          已获得纽曼思品牌官方合作授权，与惠氏、好孩子、贝因美、邦宝益智、保龄宝生物、膳麦元、聚才生物等达成战略合作，为专业的商户订货平台，致力于服务终端商户及连锁门店，减少中间商、降低商户成本，以更低的价格、更好的服务，为渠道赋能！打造一站式订货平台，让生意更轻松，商家更赚钱！
        </p>
        <a href="javascript:;">APP下载</a>
      </div>
    </div>
    <div class="aklxb">
      <div class="lxb_zuo">
        <img src="../assets/h5_index/矩形(1).png" alt="" />
      </div>
      <div class="lxb_you">
        <h3>艾科拉新宝</h3>
        <p>
          艾科拉新宝，是针对三线以下城市（非一线、新一线、二线城市）以及广大乡镇农村地区的各类B端渠道客户提供增值服务项目的业务平台，平台已与七猫免费小说、金雕生活达成深度战略合作，与支付宝、手机淘宝、京东、美团达成推广合作，平台通过创新科技及用心服务，实现科技红利普惠下沉市场，达成平台、服务商、渠道及用户多赢的业务生态。
        </p>
        <a href="javascript:;">安卓版下载</a>
      </div>
    </div>
    <div class="akzjlm">
      <img src="../assets/h5_index/编组 3.png" alt="" />
      <p>
        艾科装机联盟为上海艾科赛思网络科技集团有限公司所有并运营。上海艾科赛思网络科技集团有限公司创立于2019年10月，注册资本金2000万，是一家中外合资企业。作为一家科技企业，公司秉承聚焦线下渠道，融合线上业务的理念，致力于以科技力量打造卓越的增值服务平台！
      </p>
      <a href="javascript:;"
        >访问网站
        <img src="../assets/h5_index/编组.png" alt="" />
      </a>
    </div>
    <div class="cpjz">
      <img src="../assets/h5_index/index_title备份.png" alt="" />
    </div>
    <div class="hzhb">
      <img src="../assets/h5_index/编组 9.png" alt="" />
    </div>
    <Index2 v-bind:list="datalist"></Index2>
  </div>
</template>
<script>
// import index2 from './index2'
import Index2 from './index2.vue';
export default {
  data() {
    return {
      datalist: [
        {
          title: "关于我们",
          id: 1,
          link: "/about",
          content: [
            {
              id: 2,
              item_son: "关于艾克塞斯",
              name: "about_akss_id",
            },
            { id: 1, item_son: "合作伙伴", name: "hz" },
            {
              id: 3,
              item_son: "合作优势",
              name: "ys",
            },
          ],
        },
        {
          title: "产品业务",
          id: 2,
          link: "siness",
          content: [
            { id: 1, item_son: "艾科进货宝", name: "jhb" },
            {
              id: 2,
              item_son: "艾科拉新宝",
              name: "lxb",
            },
            {
              id: 3,
              item_son: "装机联盟",
              name: "zjlm",
            },
          ],
        },
        {
          title: "企业文化",
          id: 3,
          link: "/culture",
          content: [
            { id: 1, item_son: "企业使命", name: "qysm" },
            {
              id: 2,
              item_son: "企业愿景",
              name: "qyyj",
            },
            {
              id: 3,
              item_son: "核心价值观",
              name: "qyjzg",
            },
          ],
        },
        {
          title: "加入我们",
          id: 4,
          link: "/join",
          content: [{ id: 1, item_son: "招聘信息", name: "zp" }],
        },
        {
          title: "联系我们",
          id: 5,
          link: "/contact",
          content: [
            { id: 1, item_son: "集团总部", name: "jtzb" },
            { id: 2, item_son: "合作洽谈", name: "hzqt" },
          ],
        },
      ],
    };
  },
  components: {
    // index2
    Index2,
  },
  created() {
    this.a()
  },
};
</script>
<style lang="less" scoped>

a,
li {
  list-style: none;
  text-decoration: none;
}
.index {
  width: 7.5rem;
  font-size: 1rem;
  .index_tou {
    width: 100%;
    height: 114vw;
    background: url("../assets/h5_index/bg.png") no-repeat 50%;
    background-size: 100%;
    position: relative;
    .tou_zuo {
      float: left;
      z-index: 2;
      .zuo_tu {
        padding: 0 0.3rem;
        box-sizing: border-box;
        img {
          width: 0.37rem;
          height: 0.3rem;
        }
      }
    }
    .tou_zhong {
      margin: 0 0 0 2.8rem;
      // padding-top: 0.1rem;
      box-sizing: border-box;
      img {
        width: 2rem;
        height: 0.45rem;
      }
    }
    .tou_di {
      width: 90vw;
      position: absolute;
      top: 42.222vw;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      .di_tu {
        width: 90vw;
        height: 12.4vw;
        background: url("../assets/h5_index/编组 2.png") no-repeat 50%;
        background-size: 100%;
      }
      .di_zi {
        margin-top: 1.4vw;
        padding: 0 3.75vw;
        color: white;
        opacity: 0.8;
        font-size: 0.27rem;
        line-height: 5.28vw;
        text-align: center;
      }
    }
  }
  .cpjz {
    width: 100%;
    height: 1.65rem;
    background-color: white;
    padding: 0.25rem 1.1rem;
    box-sizing: border-box;
    img {
      width: 5.25rem;
      height: 0.6rem;
    }
  }
  .akjhb {
    width: 100%;
    height: 9.8rem;
    background: url("../assets/h5_index/编组 5.png") no-repeat 50%;
    background-size: cover;
    padding: 0.5rem 0.25rem;
    box-sizing: border-box;
    .jhb_zuo {
      float: left;
      width: 14%;
      height: 0.98rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .jhb_you {
      padding: 0 0 0 0.25rem;
      width: 80%;
      float: left;
      text-align: left;
      line-height: 0.41rem;
      h3 {
        font-size: 0.35rem;
        font-weight: bold;
        padding-bottom: 0.1rem;
      }
      p {
        font-size: 0.22rem;
        color: #757580;
      }
      a {
        display: block;
        width: 2.2rem;
        height: 0.6rem;
        border: 1px solid #0080ff;
        text-align: center;
        font-size: 0.27rem;
        line-height: 0.6rem;
        color: #0080ff;
        margin-top: 0.1rem;
      }
    }
  }
  .aklxb {
    width: 100%;
    height: 9.8rem;
    background: url("../assets/h5_index/编组 6.png") no-repeat 50%;
    background-size: cover;
    padding: 0.5rem 0.25rem;
    box-sizing: border-box;
    .lxb_zuo {
      float: left;
      width: 14%;
      height: 0.98rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .lxb_you {
      padding: 0 0 0 0.25rem;
      width: 80%;
      float: left;
      text-align: left;
      line-height: 0.41rem;
      h3 {
        font-size: 0.35rem;
        font-weight: bold;
        padding-bottom: 0.1rem;
      }
      p {
        font-size: 0.22rem;
        color: #757580;
      }
      a {
        display: block;
        width: 2.2rem;
        height: 0.6rem;
        border: 1px solid #0080ff;
        text-align: center;
        font-size: 0.27rem;
        line-height: 0.6rem;
        color: #0080ff;
        margin-top: 0.1rem;
      }
    }
  }
  .akzjlm {
    width: 100%;
    height: 9.8rem;
    background: url("../assets/h5_index/编组 7.png") no-repeat 50%;
    background-size: cover;
    padding: 0.5rem 0.25rem;
    box-sizing: border-box;
    line-height: 0.41rem;

    img {
      width: 47%;
      height: 0.68rem;
    }
    p {
      font-size: 0.229rem;
      color: #757580;
    }
    a {
      display: block;
      width: 2.2rem;
      height: 0.6rem;
      border: 1px solid #0080ff;
      text-align: center;
      font-size: 0.27rem;
      line-height: 0.6rem;
      color: #0080ff;
      margin-top: 0.1rem;
      padding-top: 0.02rem;
      img {
        width: 11%;
        height: 38%;
        padding-left: 0.03rem;
      }
    }
  }
  .hzhb {
    width: 100%;
    height: 9.8rem;
    padding: 0.5rem 0.25rem;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>