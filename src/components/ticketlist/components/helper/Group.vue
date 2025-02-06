<script>
 import group from '../../../../assets/group.png'

export default {
  name: "Type",
  props: {
    text: {
      type: String,
      required: true,
    }
  },

  computed: {
    group() {
      return group; 
    }
  }
};
</script>

<style scoped>
.group_background {
    position: relative;
    transform: translate(-92%);
    left: 92%;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(166, 129, 86, 0.2);
    border-left: 1px solid rgba(166, 129, 86, 0.2);
    border-top: 1px solid rgba(166, 129, 86, 0.2);
    border-radius: 0px 20px 0px 20px;
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.25);
    top: 150px;
    height: 40px;
    width: 40%;
    overflow: hidden;

    .text_group {
        color: rgba(255, 255, 255, 0.8);
        font-family: Inter;
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: center;
        top: 10px;
        position: relative;
        padding-left: 6px;
    }
    .group_type_image_size {
        position: absolute;
        width: 25px;
        height: 25px;
        left: 50%;
        transform: translateX(-50%);
        padding-right: 80px;
        top: 6px;
    }

}
</style>

<template>
   <div class="group_background">
    <img class="group_type_image_size" :src="group" alt="Group Image"/>
    <p class="text_group">ПО-263</p>
   </div>
</template>