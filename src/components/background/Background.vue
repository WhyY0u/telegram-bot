<template>
  <div class="background">
    <div class="content">
    <slot></slot>
  </div>
  </div>

</template>

<style scoped lang="scss">

.background {
    position: fixed;
    width: 100vw;
    background-image: url('../../assets/background.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    z-index: -1;
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content {
  overflow-y: auto; 
  height: 100%;
}
</style>