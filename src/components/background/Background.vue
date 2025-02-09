<template>
  <div class="background">
    <slot></slot>
  </div>

</template>

<style scoped lang="scss">

.background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/background.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    z-index: -1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto; 
}
</style>