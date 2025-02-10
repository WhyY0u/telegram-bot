<template>
 <div class="background_add_button" @click="onClick">
  <p class="text_button_add">+</p>
 </div>
</template>

<style>
 .background_add_button {
    position: fixed;
    top: 90%;
    transform: translate(-50%);
    left: 50%;
    width: 60px;
    height: 60px;
    backdrop-filter: blur(4px);
    border-radius: 30px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(166, 129, 86, 0.2);
    box-shadow: 0px 0px 10px rgba(166, 129, 86, 0.15);
    cursor: pointer;

    .text_button_add {
        position: relative;
        font-family: Inter;
        font-size: 30px;
        font-weight: 700;
        top: 10px;
        left: 19.5px;
        color: white;
        user-select: none;
    }
 }
</style>

<script>

export default {
    methods: {
        onClick() {
            this.$router.push('/ticket/add');
        }
    }
}

</script>