<template>
  <div class="background_user" :class="{'hide_user': hide}">
    <img class="image_user" :src="ComputedType"/>
    <p class="usertext">{{ text }}</p>
  </div>
</template>

<style>
  .background_user {
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(166, 129, 86, 0.4);
    border-radius: 0px 0px 20px 20px;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.25);
    height: 45px;
    display: flex; 
    margin-bottom: 10px;
    align-items: center; 
    transition: transform 0.5s, opacity 0.5s ease;
  }

  .usertext {
    flex-grow: 1;
    position: relative;
    text-align: center;
    color: rgba(255, 255, 255, 0.63);
    font-family: Inter;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
  }

  .image_user {
    position: absolute;
    width: 25px; 
    height: 25px;
    padding-left: 10px;
  }
  .hide_user {
    transform: translate(-50%, 15px);
    opacity: 0;
    pointer-events: none;
  }
</style>

<script>
import user from '../../../../assets/user.png'

export default {
    name:'User',
    props: {
       text: {
        type: String,
        required: true
       },
       hide: { 
        type: Boolean
       }
    },
    computed: {
    ComputedType() {
    return user;
    }
  }
}

</script>