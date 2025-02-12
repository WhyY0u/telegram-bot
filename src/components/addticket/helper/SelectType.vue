<template>
    <div class="container_select_type">
        <div class="background" :class="{'hide_left': localSelectedType != ''}">
            <p :class="'red'" class="header_select">Жалоба</p>
            <p class="description_select">Если у вас есть жалоба, пожалуйста, напишите нам, и мы постараемся решить проблему в кратчайшие сроки</p>
            <img class="image" :src="errorimg"/>
            <button @click="onClick('Жалоба')" class="button_select">Выбрать</button>
        </div>
        <div class="background" :class="{'hide_right': localSelectedType != ''}">
            <p class="header_select">Предложения</p>
            <p class="description_select">Если у вас есть предложения по улучшению нашего колледжа, пожалуйста, поделитесь ими с нами, и мы обязательно примем их во внимание</p>
            <img class="image2" :src="offer"/>
            <button  @click="onClick('Предложения')" class="button_select">Выбрать</button>
        </div>
    </div>
</template>


<script>
import errorimg from '../../../assets/error.png'
import offer from '../../../assets/offer.png'

export default {
  props: {
    modelValue: { 
      type: String,
      default: '',
    },
  },
  data() {
    return {
      errorimg, 
      offer,   
      localSelectedType: this.modelValue, 
    };
  },
  methods: {
    onClick(name) {
      this.localSelectedType = name; 
    },
  },
  watch: {
    modelValue(newVal) {
      if (newVal !== this.localSelectedType) {
        this.localSelectedType = newVal;
      }
    },
    localSelectedType(newVal) {
      this.$emit('update:modelValue', newVal);
      console.log('localSelectedType ' + newVal);
    }
  }
}
</script>



<style>
 .container_select_type {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 600px;
    left: 0px;
    top: 0px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .background {
        position: relative;
        width: 330px;
        left: 50%;
        transform: translate(-50%);
        height: 270px;
        top: 0px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 29px;
        margin-bottom: 50px;
        box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        transition: left 0.5s, transform 0.5s ease;
        padding-bottom: 50px;

        @supports (--css: variables) and (backdrop-filter: blur(1px)) {
              backdrop-filter: blur(10px); 
        }

        @supports (-moz-backdrop-filter: blur(1px)) {
            -moz-backdrop-filter: blur(44px)
        }
        .header_select {
          position: relative;
          font-family: Inter;
          font-size: 18px;
          text-align: center;
          top: 25px;
          color: rgb(255, 255, 255);
          font-family: Inter;
          font-weight: 700;
          transform: translateX(7px);

        }
        .description_select {
            position: relative;
            top: 40px;
            font-family: Inter;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.24);
            text-align: center;
        }
        .image {
          position: absolute;
          top: 21px;
          left: 95px;
          width: 30px;
          transform: translateX(7px);
        }
        .image2 {
          position: absolute;
          top: 21px;
          left: 68px;
          width: 30px;
          transform: translateX(7px);

        }
        .red {
          color: red;
          transform: translateX(7px);
        }
        .button_select {
            cursor: pointer;
            position: absolute;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            background-color: rgb(0, 69, 166);
            box-shadow: 0px 0px 15px rgba(0, 69, 166, 1);
            top: 175px;
            font-size: 16px;
            width: 180px;
            height: 48px;
            left: 50%;
            transform: translateX(-50%);
            color: rgb(255, 255, 255);
            font-family: Inter;
            transition: background-color 0.5s, box-shadow 0.5s ease;
            font-weight: 600;
        }
    }
    .hide_left {
      left: 0%;
      transform: translate(-100%);
    }
    .hide_right {
      left: 100%;
      transform: translate(50%);
    }
 }
</style>