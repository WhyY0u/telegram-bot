<template>
 <div class="container_input">
    <textarea class="input" v-model="text" @focus="inputfocus" @blur="blurfocus" @input="autoResize"/>
    <p class="text_input" :class="{'hide': focus || text.length > 0}">Введите комментарий</p>
 </div>>
</template>

<style>
 .container_input {
    position: relative;
    height: auto;
    .input {
        box-sizing: border-box;
        border-left: 1px solid rgba(166, 129, 86, 0.2);
        border-right: 1px solid rgba(166, 129, 86, 0.2);
        border-top:  none;
        border-bottom:  none;
        border-radius: 0px 20px 20px 20px;
        backdrop-filter: blur(44px);
        background: rgba(0, 0, 0, 0.5);
        outline: none;
        color: rgba(255, 255, 255, 0.51);
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        height: auto;
        min-height: 200px;
        padding-bottom: 150px;
        padding-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        padding-left: 10px;
        resize: none;
        overflow: hidden;
    }
    .text_input {
        position: absolute;
        color: rgba(255, 255, 255, 0.11);
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: 0px;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        opacity: 1;
        transition: opacity 0.5s, top 0.5s ease;
    }
    .hide {
        top: 70%;
        opacity: 0;
        pointer-events: none;
    }
 }
</style>

<script>
export default {
  data() {
    return {
      text: '',
      focus: false
    };
  },
  
  methods: {
    inputfocus() {
        this.focus = true;  
    },
    blurfocus() {
        this.focus = false;
    }, 
    autoResize(event) {
      const textarea = event.target;

      textarea.style.height = 'auto';

      textarea.style.height = `${textarea.scrollHeight - 140}px`;
    }
  }
};
</script>