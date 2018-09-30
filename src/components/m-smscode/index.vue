<template>
  <div class="smscode-wrapper">
    <form>
      <input
        type="tel"
        v-model="smscode"
        id="smscode-form"
        maxlength="6"
        autocomplete="off"
        class="code-hidden"/>
    </form>
    <label for="smscode-form">
      <ul class="code-list">
        <li v-for="(number, index) in sixCode" :key="index">{{ number }}</li>
      </ul>
    </label>
  </div>
</template>

<script>
const SMSCODE_LEN = 6;

export default {
  name: 'smscodeInput',
  data() {
    return {
      sixCode: new Array(SMSCODE_LEN),
      smscode: '',
    };
  },
  methods: {
    clear() {
      this.smscode = '';
    },
  },
  watch: {
    smscode(val) {
      if (val.length === SMSCODE_LEN) {
        this.$emit('on-code-end', val);
      }
      const newSixCode = [...val];
      newSixCode.length = SMSCODE_LEN;    // 保持固定长度
      this.sixCode = newSixCode;          // 更新sixCode数组
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  @borderStyle: 1px solid #c4c2cf;
  @inputHeight: .4rem;

  .smscode-wrapper label {
    display: flex;
    justify-content: center;
  }

  .code-list {
    display: inline-flex;
    border: @borderStyle;
    border-radius: 4px;
    background-color: #fff;
    li {
      display: block;
      width: .57rem;
      height: @inputHeight;
      line-height: @inputHeight;
      font-size: .2rem;
      text-align: center;
      & + li {
        border-left: @borderStyle;
      }
    }
  }

  .code-hidden {
    position: absolute;
    clip: rect(0 0 0 0);
    transform: scale(0); // 用于隐藏手机端上的input光标
  }
</style>
