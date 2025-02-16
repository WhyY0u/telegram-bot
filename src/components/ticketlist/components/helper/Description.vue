<script>
  export default {
    props: {
        text: '',
    }
  }
</script>

<style>
 .background_desc {
    position: relative;
    top: 30px;
    left: 50%;
    width: 85%;
    height: auto;
    min-height: 100px;
    transform: translate(-50%);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.5);
    padding-bottom: 55px;
    margin-bottom: 55px;

    .text {
        color: rgba(255, 255, 255, 1);
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: left;
        padding-left: 15px;
        padding-top: 15px;
        word-wrap: break-word;
        width: auto;
        padding-right: 30px;

    }
 }
</style>

<template>
    <div class="background_desc">
      <p class="text">{{ text }}</p>
    </div>
</template>