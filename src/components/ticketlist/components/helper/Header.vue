<template>
  <div class="header">
    <p class="text">{{ text }}</p>
  </div>
</template>


<style>
  .header {
    position: relative;
    top: 180px;
    width: 90%;
    transform: translate(-50%);
    left: 50%;
    height: 45px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(166, 129, 86, 0.2);
    border-left: 1px solid rgba(166, 129, 86, 0.2);
    border-top: 1px solid rgba(166, 129, 86, 0.2);
    border-radius: 20px 20px 0px 0px;
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.25);
    overflow: hidden;


    .text {
     position: relative;
     text-align: center;
     color: rgb(255, 255, 255);
     font-family: Inter;
     font-size: 15px;
     font-weight: 700;
     line-height: 19px;
     letter-spacing: 0px;
     top: 10px;
    }
  }
</style>

<script>
export default {
  name: "Header",
  props: {
    text: {
      type: String,
      required: true,
    }
  },
};
</script>