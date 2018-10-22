<template>
    <div>
      <x-input
        title="账&nbsp;&nbsp;&nbsp;号"
        v-model="account"
        placeholder="请输入手机号或邮箱">
      </x-input>
      <x-input
        title="密&nbsp;&nbsp;&nbsp;码"
        type="password"
        v-model="password"
        placeholder="请输入密码">
        <a class="passport-forget" slot="right" href="javascript:void(0)">忘记密码</a>
      </x-input>
      <x-input
        title="验证码"
        v-model="vcode"
        placeholder="请输入右侧验证码">
        <imagecode
          ref="imagecode2"
          slot="right-full-height">
        </imagecode>
      </x-input>
    </div>
</template>

<script>
export default {
  name: 'e-input',
  data() {
    return {
      account: '13100001111',
      password: '',
      vcode: '',
    };
  },
};
</script>

<style lang="less">

</style>
