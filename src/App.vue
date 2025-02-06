<template>
  <Background>
    <div class="container_text">
      <p class="char_k">K</p>
      <p class="char_it">IT</p>
    </div>
    <p class="aitu">AITU</p>
    <router-view></router-view>
  </Background>
  </template>
  
  <script>
import Background from './components/background/Background.vue';

  export default {
    name: 'App',
    components: {
      Background,
    }
    
  };
  </script>
  <style scoped lang="scss">
  .container_text {
    display: flex;
    width: 90px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    top: 60px;

   .char_k{
      position: relative;
      left: 0px;
      color: rgb(166, 129, 86);
      font-family: Pixelify Sans;
      font-size: 48px;
      font-weight: 700;
      text-shadow: 0px 0px 21px  rgb(166, 129, 86);
   }
   .char_it{
      position: relative;
      left: 0px;
      color: rgb(255, 255, 255);
      font-family: Pixelify Sans;
      font-size: 48px;
      font-weight: 700;
      text-shadow: 0px 0px 21px  rgba(255, 255, 255, 0.25);
   }
   
  }

  .aitu {
        position: relative;
        color: rgb(255, 255, 255);
        font-family: Pixelify Sans;
        font-size: 48px;
        font-weight: 700;
        text-shadow: 0px 0px 21px  rgba(255, 255, 255, 0.25);
        text-align: center;
        top: 50px;
        transform: translateX(-5px);
     }
  </style>