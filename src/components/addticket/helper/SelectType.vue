<template>
    <div class="container">
        <div class="background">
            <p class="header_select">Жалоба</p>
            <p class="description_select">Если у вас есть жалоба, пожалуйста, напишите нам, и мы постараемся решить проблему в кратчайшие сроки</p>
            <img :src="{errorimg}"/>
        </div>
        <div class="background">
            <p class="header_select">Предложения</p>
            <p class="description_select">Если у вас есть предложения по улучшению нашего колледжа, пожалуйста, поделитесь ими с нами, и мы обязательно примем их во внимание</p>
        </div>
    </div>
</template>


<script>
import errorimg from '../../../assets/error.png'
import offer from '../../../assets/offer.png'

export default {
  data() {
    return {
      errorimg
    };
  }
}

</script>


<style>
 .container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    .background {
        position: relative;
        width: 330px;
        left: 50%;
        transform: translate(-50%);
        height: 270px;
        top: 200px;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 29px;
        margin-bottom: 50px;


        box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.5);
        overflow: hidden;

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
          top: 30px;
          color: rgb(255, 255, 255);
          font-family: Inter;
          font-weight: 700;
        }
        .description_select {
            position: relative;
            top: 40px;
            font-family: Inter;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.24);
            text-align: center;
        }
    }
 }
</style>