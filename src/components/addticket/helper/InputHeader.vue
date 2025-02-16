<template>
<div class="container_2">
  <input :class="{'hide': hide}" maxlength="30" class="header" @focus="onFocus" @blur="onBlur" @input="onInput"/>
  <p class="header_text_1" :class="{'hide_text': focus || value.length > 0 && !error, 'hide2': hide, 'font_size': error}">{{ error ? 'Заголовок должен содержать не менее 4 символов' :'Введите Заголовок' }}</p>
</div>
</template>

<script>
  export default {
    name: 'InputHeader',
    methods: {
        onBlur() {
            this.focus = false;
        },
        onFocus() {
            this.focus = true;
            this.$emit('set-error', false);
        },
        onInput(event) {
            this.value = event.target.value;
            this.$emit('set-text', event.target.value);
            this.$emit('update:modelValue', this.value);
        }
    },
    data() {
        return {
        focus: false,
        value: '',
        }
    },
    props: {
        inputValue: {
            type: String
        },
        hide: {
            type: Boolean
        },
        error: {
            type: Boolean
        }
    }
  }
</script>

<style>

.container_2 {
    position: relative;
    width: 90%;
    margin-bottom: 10px;
    transform: translate(-50%);
    left: 50%;
    height: 45px;

.header {
    position: absolute;
    top: 0px;
    width: 100%;
    left: 50%;
    height: 100%;
    box-sizing: border-box;
    border-bottom: none;
    border-left: none;
    border-top: 1px solid rgba(166, 129, 86, 0.5);
    border-right: none;
    border-radius: 20px 20px 0px 0px;
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.25);
    overflow: hidden;
    outline: none;
    text-align: center;
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0px;
    z-index: -1;
    transition: transform 0.5s, opacity 0.5s ease;

}
.header_text_1 {
    position: relative;
    top: 12px;
    font-family: Inter;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-weight: 200;
    pointer-events: none;
    transition: transform 0.5s, opacity 0.5s ease; 
}
.font_size {
    font-size: 13px;
    top: 15px;
    color: rgba(255, 0, 0, 0.568);
    font-weight: 500;
}
.hide_text {
   transform: translateY(10px);
   opacity: 0;
}
}
.hide {
    transform: translate(-50%, -10px);
    opacity: 0;
    pointer-events: none;
}
.hide2 {
    transform: translate(-10px);
    opacity: 0;
    pointer-events: none;
}

</style>