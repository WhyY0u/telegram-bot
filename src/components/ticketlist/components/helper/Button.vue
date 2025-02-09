<template>
  <button :class="{'left': !right, 'right': right, 'color_red': color == 'red', 'color_green': color == 'green', 'position_right': right, 'position_left': !right}" @click="handleClick" class="button">{{ name }}</button>
</template>


<style>
 .button {
    box-sizing: border-box;
    border: 1px solid rgba(166, 129, 86, 0.2);
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.5);
    font-family: Inter;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0px;
    position: absolute;
    top: 0px;
    width: 150px;
    height: 45px;
    outline: none;
    cursor: pointer;

 }
 .left {
    border-radius: 20px 0px 20px 20px;
 }
 .right {
    border-radius: 0px 20px 20px 20px;
 }
 .color_red {
    color: rgba(255, 0, 0, 0.51);
 }
 .color_green {
    color: rgba(0, 255, 55, 0.51);
 }
 .position_left {
    left: 11%;
    transform: translate(-11%);
 }
 .position_right {
   right: 6%;
   transform: translate(-6%);
 
 }

</style>

<script>

export default {
    name: 'Button',
    props: {
        right: {
            type: Boolean,
        },
        color: {
            type: String,
        },
        name: {
            type: String
        },
        onClick: {
          type: Function,
          default: () => {},
         },
    },
    methods: {
    handleClick() {
      this.onClick();
    }
  }

}

</script>