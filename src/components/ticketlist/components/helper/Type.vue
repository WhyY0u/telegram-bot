<template>
 <div class="type-ticket" :class="{'hide_type': hide}">
  <img :class="{'ticket_type_image_error': text == 'Жалоба'}" class="ticket_type_image_size" :src="ComputedType"/>
  <p class="ticket_text" :class="{'red_text': text == 'Жалоба', 'white_text': text != 'Жалоба'}" >{{ text }}</p>
 </div>
</template>

<style>
.type-ticket {
    position: relative;
    box-sizing: border-box;
    border-left: 1px solid rgba(166, 129, 86, 0.4);
    border-radius: 0px 20px 0px 20px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.25);
    left: 5%;
    height: 40px;
    width: 40%;
    overflow: hidden;
    transition: transform 0.5s, opacity 0.5s ease;


    .ticket_text {
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
    .ticket_type_image_size {
        position: absolute;
        width: 25px;
        left: 15px;
        top: 5px;
    }
    @media (max-width: 375px) {
    .ticket_type_image_size {
        position: absolute;
        width: 23px;
        left: 12px;
        top: 6px;
    }
    }
    .ticket_type_image_error {
        left: 50%;
        transform: translateX(-50%);
        padding-right: 90px;
    }
}
.red_text {
    color: red;
}
.white_text {
    color: white;
    transform: translate(7px);
}
.hide_type {
  transform: translateX(-15px);
  opacity: 0;
  pointer-events: none;
}
</style>

<script>

import errorimg from '../../../../assets/error.png'
import offer from '../../../../assets/offer.png'

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
  ComputedType() {
    console.log(this.text);
    if(this.text == "Жалоба") return errorimg;
    return offer;
    }
  }
};
</script>