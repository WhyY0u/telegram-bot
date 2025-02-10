<template>
 <div class="background_status">
    <img :src="getImage" class="image_status"/>
    <p :class="getImageStyle" class="status">{{ status }}</p>
 </div>
</template>

<script>
 import blue from '../../../../assets/status_blue.png'
 import green from '../../../../assets/status_green.png'
 import orange from '../../../../assets/status_orange.png'
 import red from '../../../../assets/status_red.png'



 export default {
   name: "Status",
   props: {
    status: "",
   },
   computed: {
    getImageStyle() {
        if(this.status === "Ожидание") return 'color_orange';
        if(this.status === "Выполнено") return 'color_green';
        if(this.status === "Выполняется") return 'color_blue';
        return 'color_red';
    },
    getImage() {
        if(this.status == "Ожидание") return orange;
        if(this.status == "Выполнено") return green;
        if(this.status == "Выполняется") return blue;
        return red;
    }
   }
 }
</script>

<style>
  .background_status {
    position: relative;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(166, 129, 86, 0.2);
    border-left: 1px solid rgba(166, 129, 86, 0.2);
    border-top: 1px solid rgba(166, 129, 86, 0.2);
    border-radius: 0px 0px 20px 20px;
    width: 90%;
    left: 50%;
    transform: translate(-50%);
    backdrop-filter: blur(44px);
    background: rgba(0, 0, 0, 0.25);
    top: 0px;
    height: 45px;
    display: flex; 
    align-items: center; 
    

    .status {
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
    .image_status {
     position: absolute;
    width: 25px; 
    height: 25px;
    padding-left: 10px;
    }
    .color_red {
        color: rgba(255, 0, 0, 0.98);
    }
    .color_green {
        color: rgb(11, 255, 2);
    }
    .color_blue {
        color: rgba(2, 142, 255, 0.98);
    }
    .color_orange {
        color: rgba(166, 129, 86, 0.63);
    }
  }
</style>