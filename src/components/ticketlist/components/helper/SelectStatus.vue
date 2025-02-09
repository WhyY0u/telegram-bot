<template>
 <div class="container_selected_status" @click="onClick" :class="{'full': open}"> 
   <p class="edit_status">Изменить Статус</p>
   <p :class="{'rotate_arrow': open}" class="arrow" >></p>
   <div class="open_box">
    <p 
        v-for="status in statuses" 
        :key="status" 
        class="text_style"
        :class="{'selected': selected === status}" 
        @click.stop="selectStatus(status)"
      >
      {{ status }}
    </p>
   </div>
 </div>
</template>

<style>
.container_selected_status {
    position: relative;
    box-sizing: border-box;
    border-left: 1px solid rgba(166, 129, 86, 0.2);
    border-right: 1px solid rgba(166, 129, 86, 0.2);
    border-radius: 20px 0px 20px 20px;
    width: 90%;
    height: 50px;
    backdrop-filter: blur(44px);
    left: 50%;
    transform: translate(-50%);
    cursor: pointer;
    transition: height 0.5s ease;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;

    .edit_status {
        position: relative;
        color: rgba(255, 255, 255, 0.51);
        font-family: Inter;
        font-size: 15px;
        font-weight: 300;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: center;
        top: 17px;
        user-select: none;
        pointer-events: none;
    }
    .arrow {
        position: absolute;
        left: 90%;
        transform: translate(-90%);
        color: rgba(93, 93, 93, 0.39);
        font-family: Inter;
        font-size: 20px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        top: 14px;
        user-select: none;
        transition: transform 0.5s ease;
        pointer-events: none;
    }
    .open_box {
        position: relative;
        width: 50%;
        height: 60px;
        left: 50%;
        transform: translate(-50%);
    }
    .text_style {
        position: relative;
        text-align: center;
        top: 30px;
        font-family: Inter;
        font-size: 15px;
        padding-bottom: 15px;
        color: rgba(255, 255, 255, 0.171);
        cursor: pointer;
        transition: color 0.3s, font-size 0.3s ease;
    }
    .selected {
        color: rgba(255, 255, 255, 1);
        font-size: 17px;
    }
    .rotate_arrow {
        transform: rotate(90deg);
    }
}
.full {
    height: 150px;
}

</style>

<script>

export default {
    name: 'SelectStatus',
    props: {
        selected: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            open: false,
            selected: '',
            statuses: ['Выполняется', 'Выполнено', 'Отказано']
        };
    },
    methods: {
        onClick() {
            this.open = !this.open;
        },
        selectStatus(status) {
            this.selected = status;
            this.$emit('update:selected', status);
            this.open = false;
        },
    }
}


</script>