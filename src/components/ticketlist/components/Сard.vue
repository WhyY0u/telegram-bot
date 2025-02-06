<script>

import errorimg from '../../../assets/error.png'
import offer from '../../../assets/offer.png'

export default {
  name: "Card",
  props: {
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
    methods: {
      goToTicketDetail() {
      this.$router.push({ name: 'ticket', params: { id: this.id } });
    },
    getColorFromStatus() {
      if(this.status == 'Ожидание') return 'color_orange'
      if(this.status == 'Выполняется') return 'color_blue'
      if(this.status == 'Выполнено') return 'color_green'
      return 'color_red'
    },
    getGlowFromStatus() {
      if(this.status == 'Ожидание') return 'glow_color_orange'
      if(this.status == 'Выполняется') return 'glow_color_blue'
      if(this.status == 'Выполнено') return 'glow_color_green'
      return 'glow_color_red'
    },
    formattedName(name) {
      const nameParts = name.split(' '); 
      if (nameParts.length === 3) {
        const firstName = nameParts[1];
        const formatted = `${nameParts[0][0]}.${firstName[0]}. ${nameParts[2]}`;
        return formatted;
      }
      return name;
    },
  },
  computed: {
  ComputedType() {
    if(this.type == "Жалоба") return errorimg;
    return offer;
    }
  }
};
</script>


<template>
 <div @click="goToTicketDetail" class="card_container" :class="{'images_card': images && images.length > 0}">
  <div :class="{'background_glow_red': type == 'Жалоба',
                  'background_glow_white': type != 'Жалоба'
      }"  class="glow_1"></div>
  <div :class="getGlowFromStatus()" class="glow_2"></div>
 <div class="card">
    <div class="type">
      <p :class="{'color_red': type == 'Жалоба',
                  'color_white': type != 'Жалоба'
      }" class="text_type">{{ type }}</p>
      <img :class="{'glow_red': type == 'Жалоба',
                  'glow_white': type != 'Жалоба'
      }" class="image_type" :src="ComputedType" />
    </div>
    <div class="avtor_name_and_group">
      <p class="avtor_name">{{ formattedName(name) }}</p>
      <p class="avtor_group">{{ group }}</p>
    </div>
      <p class="heading">{{ heading }}</p>
      <div class="descript_container">
      <p class="description">{{ description }}</p>
     </div>
    
   <p class="status" :class="getColorFromStatus()">{{ status }}</p>
 </div>
</div>

</template>

<style scoped>
.card_container {
    position: relative;
    width: 100%;
    height: 150px;
    margin-bottom: 30px;
    cursor: pointer;
    

}
.images_card {
  height: 280px;
  
}
  .card {
    will-change: backdrop-filter;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 10px 4px 0px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.5);
  .type {
     position: absolute;
     width: 150px;
     height: 30px;
     top: 10px;

    .text_type {
      position: absolute;
      left: 45px;
      top: 0px;
      font-family: Inter;
      font-size: 13.5px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0px;
      top: 7px;
    }
    .image_type {
      position: absolute;
      left: 15px;
      top: 0px;
      width: 26px;

    }
  
    .color_white {
      color: rgb(255, 255, 255);
    }
    .glow_red {
      filter: drop-shadow(0px 0px 10px #ff0000);
    }
    .glow_white {
      filter: drop-shadow(0px 0px 10px #ffffff);
      width: 30px;
      left: 13px;

    }
  }
  .avtor_name_and_group {
     position: absolute;
     height: 40px;
     top: 15px;
     right: 10px;
     .avtor_name {
      color: rgb(166, 129, 86);
      font-family: Inter;
      font-size: 13.5px;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
     }
     .avtor_group {
      color: rgba(166, 129, 86, 0.49);
      font-family: Inter;
      font-size: 13.5px;
      font-weight: 200;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: right;
     }
  }
    .heading {
      position: relative;
      color: rgba(208, 208, 208, 0.68);
      font-family: Inter;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0px;
      top: 45px;
      left: 15px;
  }
  .description {
    position: relative;
    color: rgba(255, 255, 255, 0.253);
    font-family: Inter;
    font-size: 13.5px;
    font-weight: 300;
    line-height: 17px;
    letter-spacing: 0px;
    top: 48px;
    left: 15px;
    white-space: normal;
    width: 290px;
  }
  .descript_container {
    position: absolute;
    width: 100%;
    height: 100px;
    overflow: hidden;
  }
}
.glow_1 {
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 15px;
    left: 1px;
    top: 1px;
  }
  .glow_2 {
    position: absolute;
    height: 20px;
    width: 50px;
    border-radius: 15px;
    right: 10px;
    top: 100%;
    transform: translateY(-30px);

  }
  .background_glow_red {
    background-color: red;
  }
  .background_glow_white {
    background-color: white;
  }
  .images {
    position: relative;
    width: 92%;
    transform: translateX(-50%);
    left: 50%;
    height: 105px;
    top: 105px;
    display: flex;
  }

  .status {
    position: absolute;
    top: 100%;
    right: 10px;
    transform: translateY(-30px);
    font-family: Inter;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    opacity: 0.62;
  }
  .color_green {
    color: rgba(11, 255, 2, 1);
  }
  .color_orange {
    color: rgba(166, 129, 86, 0.62);
  }
  .color_blue {
    color: rgba(2, 142, 255, 0.62);
  }
  .color_red {
      color: rgb(255, 0, 0);
  }
  .glow_color_orange {
    background-color: rgba(166, 129, 86, 1);
  }
  .glow_color_green {
    background-color: rgb(0, 255, 0);
  }
  .glow_color_red {
    background-color: rgb(255, 0, 0);
  }
  .glow_color_blue {
    background-color: rgba(2, 142, 255,1);
  }

  
 
</style>
