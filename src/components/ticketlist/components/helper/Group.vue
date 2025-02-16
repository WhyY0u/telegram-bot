<script>
 import group from '../../../../assets/group.png'

export default {
  name: "Type",
  props: {
    text: {
      type: String,
      required: true,
    },
    hide: {
      type: Boolean
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
    position: absolute;
    right: 5%;
    box-sizing: border-box;
    border-right: 1px solid rgba(166, 129, 86, 0.4);
    border-radius: 0px 20px 0px 20px;
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.25);
    height: 40px;
    width: 40%;
    overflow: hidden;
    transition: opacity 0.5s, transform 0.5s ease;

    .text_group {
        color: rgba(255, 255, 255, 1);
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
.hide_group {
  transform: translateX(15px);
  opacity: 0;
  pointer-events: none;
}
</style>

<template>
   <div class="group_background" :class="{'hide_group': hide}">
    <img class="group_type_image_size" :src="group" alt="Group Image"/>
    <p class="text_group">{{ text }}</p>
   </div>
</template>