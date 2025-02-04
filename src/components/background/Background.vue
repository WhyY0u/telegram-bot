<template>
  <div class="background">
    <slot></slot>
  </div>

</template>

<style scoped lang="scss">

.background {
    position: static;
    width: 100vw;
    height: 100vh;
    background-image: url('../../assets/background.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
}
</style>