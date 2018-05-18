<template>
  <!-- 消息提示 -->
  <div class="msg-box">
    <!-- 模态对话框 -->
    <div class="cover"></div>
    <div class="model-box">
      <h3>{{ title }}</h3>
      <p>
        {{ message }}
      </p>
      <div class="btn-footer">
        <div class="btn btn-primary btn-normal" @click="btnClick">{{ buttonText }}</div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    message: {
      type: String
    },
    buttonText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    btnClick () {
      this.$emit('modelBoxClicked')
    }
  }
}
</script>
<style lang="scss">
.msg-box {
  .model-box{
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 8001;
    width: 80%;
    transform: translateX(-50%)  translateY(-50%);
    background-color: #fff;
    padding-bottom: 0.1rem;
    border-radius: 0.1rem;
    h3{
      padding: 0.1rem;
      border-radius: 0.1rem;
      background-color: #F5F6FA;
      text-align: center;
    }
    p {
      text-align: center;
      padding: 0.15rem 0;
    }
    .btn-footer{
      .btn{
        width: 80%;
        background-color: #FF8A66;
      }
    }
  }
  .cover {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 8000;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.2;
  }
}
</style>
