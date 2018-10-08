<template>
  <div class="m-input m-cell" :class="{ 'm-input-has-right-full': hasRightFullHeightSlot }">
    <div class="m-cell-hd">
      <slot name="label">
        <label class="m-cell-label" :style="labelStyles" v-if="title" v-html="title"></label>
      </slot>
    </div>
    <div class="m-cell-bd">
      <input
        :id="`input-${uuid}`"
        class="my-input"
        :style="inputStyle"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        v-model="currentValue"
        :autocomplete="autocomplete"
        :autocapitalize="autocapitalize"
        :autocorrect="autocorrect"
        :spellcheck="spellcheck"
        @focus="focusHandler"
        @blur="onBlur"
        ref="input"/>
    </div>
    <div class="m-cell-ft">
      <i
        class="icon-eye"
        :class="{ 'icon-eye-password': passwordVisibility }"
        v-show="passwdInput && (currentValue.length > 0)"
        @click="showOrHidePassword">eye
      </i>
      <slot name="right"></slot>
      <div v-if="hasRightFullHeightSlot" class="input-right-full">
        <slot name="right-full-height"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'x-input',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    autocomplete: {
      type: String,
      default: 'off',
    },
    autocapitalize: {
      type: String,
      default: 'off',
    },
    autocorrect: {
      type: String,
      default: 'off',
    },
    spellcheck: {
      type: String,
      default: 'false',
    },
  },
  computed: {
    labelStyles() {
      const textAlign = this.labelAlign || this.$parent.labelAlign || 'center';
      return {
        textAlign,
        width: this.labelWidth || this.$parent.labelWidth,
        marginRight: this.labelMarginRight || this.$parent.labelMarginRight,
        paddingLeft: textAlign === 'left' ? '.12rem' : 0,
      };
    },
    inputType() {
      if (!this.passwdInput) return this.type;
      return this.passwordVisibility ? 'text' : 'password';
    },
    passwdInput() {
      return this.type === 'password';
    },
  },
  data() {
    return {
      uuid: Math.random()
        .toString(36)
        .substring(3, 8),
      inputStyle: '',
      currentValue: '',
      passwordVisibility: false,
      hasRightFullHeightSlot: false,
    };
  },
  methods: {
    scrollIntoView(time = 0) {
      setTimeout(() => {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
          setTimeout(() => {
            document.activeElement.scrollIntoViewIfNeeded();
          }, time);
        }
      });
    },
    showOrHidePassword() {
      this.passwordVisibility = !this.passwordVisibility;
    },
    focus() {
      this.$refs.input.focus();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
      this.scrollIntoView(500);
    },
    onBlur($event) {
      this.$emit('on-blur', this.currentValue, $event);
      this.inputBlur = true;// 记录失效状态
    },
    // 处理密码输入框再次获焦的删除操作
    handlePasswdInput(newVal, oldVal) {
      if (this.passwdInput && (newVal.toString().length < oldVal.toString().length)) {
        // 删除已输入的密码
        this.$nextTick(() => {
          this.currentValue = '';
        });
      }
    },
  },
  watch: {
    value(newVal) {
      this.currentValue = newVal;
    },
    currentValue(newVal, oldVal) {
      // 更新组件上的v-model
      this.$emit('input', newVal);
      this.$emit('on-change', newVal);
      if (this.inputBlur) {
        this.inputBlur = false;
        this.handlePasswdInput(newVal, oldVal);
      }
    },
  },
  created() {
    this.currentValue = (this.value === undefined || this.value === null) ? '' : this.value;
  },
  beforeMount() {
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
};
</script>

<style lang="less" rel="stylesheet/less">
  @import "../../styles/cell";

  @cellLineHeight: .44rem;

  .m-input-has-right-full {
    padding: 0;
  }

  .my-input {
    display: inline-block;
    width: 100%;
    border: 0;
    outline: 0;
    -webkit-appearance: none;
    background-color: transparent;
    font-size: .14rem;
    color: inherit;
    height: @cellLineHeight;
    padding: 0.1rem 0;

    // hides the spin-button
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .input-right-full {
    margin-left: 5px;
    height: @cellLineHeight;
    vertical-align: middle;
    & img {
      height: @cellLineHeight;
    }
  }

  .icon-eye {
    display: inline-block;
    position: relative;
    top: .02rem;
    line-height: 1;
    color: transparent;
    margin-right: .1rem;
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: .17rem;
      height: .12rem;
      background: url(data:image/png;base64,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) no-repeat;
      background-size: contain;
    }
  }

  .icon-eye-password::after {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAlCAYAAADx5+EfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADvUlEQVRo3tXaW4hVZRQH8N8cu9BttLxEEFn0UklpF/U8lPmiFME8aNlD0QRGPvTQoiLqJY2QIitWjw4IJVJBSvQQ1hRY0mXSEi8k9BBdKMjUUKeQMqce9pF0mplzZs7eM/aH/XL2uvz/+3znfGutb3eoCBExHfMwB9fgMszE+ZiMGgZwGP34oXHtxU5sy8z9VXDrKFnoPCzFYsxuM/4AdqMXmzJz22kjOiJmYHnjurIsYkPgG6zDusz8ZUJER8QVeALdOLtCsYPxB17Fc5n57biIjohpeBoP4oxxFDsYf6EHKzPzQCWiI6LWEPospkyg2ME4hCfRk5kDpYmOiMuxHrdMtMIRsBXdmfldM8NaC4Lvxq7TXDAswK6IWNbMcNhvOiIm4UU8PNFqxoCX8WhmHm9ZdER04k3Ffvt/RS/uyswjTUVHxFS8i5sqIHK0QWY79mM65ioe7jkV5NuO2zLz12FFR8QleB+zSk5+DGuwJjMPDb4ZEVPwOB7DmSXn3oPFmfnzf0Q3auWtuKrkpAexNDM/amYYEbfiLVxYMoe9WHiilu9oJJuM9zC/5GTHG8k+btUhIm7Gh5hUMpfPsSgz+09sWesrEExRMLQsGBr2PRVwmY8NUIuILnRVkGQAq8fou1qxSspGV0QsqSm6oyqwPTN/Gotjw++zinh111CvKPgXbfrvrojX/BqmVhT8twn2Hw4X1RRFQhWY0ab/9Ip4Hazh04qCz27T/+qKeH1Sw9qKgl/faElHjYiYqRgqVoGeWmb24o0KgnfgqTH6rtRC2zsGvJ6ZvScCL0fTMnEM6I6IUXVqDfvuCrhswQOcWntPVpR/c0pO1o8lmflBC4IXYRMuKJnDTkU5fPgU0Y2kVbWVxxX/HauGGuA3mp1VWKH8mnsbbj+5vRyqn+7E21hYcnKKFnMLdigGelNwYyNX2S0lxcrtysz+kz8cbnJyrmK2fGcFRMYLG3FfZh4dfGPIpdTX13esXq9vbDyUBUo+/qkYf+MZPJSZx4YyaComIu7AK5g20WpawAHcn5nvjGTUdC9sBLgOmydaURNsxrXNBDPKZRsR9+Al7dfVZWIfHsnM11p1GNX20NfXt6der69VDAjmquYft1UcxfNYlplfjsaxnVPLixXTyxXKLyZGQr9iz38hM/eNJUAZ59OduFdxuNduZzUSdilmZxuGGuCPq+hBD+Aq/76JUMdZbYT7E32Kw4GNmfl1WTwr238j4jzcoKjlZ+FSxTsnnU79OfTjCL7Hj/hKUSvvyMzfq+D2D+UdFrVYP9yEAAAAAElFTkSuQmCC);
  }
</style>
