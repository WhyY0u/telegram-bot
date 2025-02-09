<template>
<div class="container">
  
  
  <div class="container_input">
    <Input/>
  </div>
  <div class="default_container">
  <SelectStatus :selected="'Выполнено'"/>
</div>


</div>
</template>


<style scoped>
 .container {
  position: absolute;
  width: 100%;
  height: calc(100%);
}
.default_container {
  width: auto;
  height: auto;
  top: 230px;
  position: relative;
}
.container_button {
  position: relative;
  width: 100%;
  height: 30px;
  top: 230px;
}
.container_input {
  position: relative;
  width: 85%;
  height: auto;
  left: 50%;
  transform: translate(-50%);
  top: 220px;
}

</style>

<script>
import Header from './helper/Header.vue';
import Type from './helper/Type.vue';
import Group from './helper/Group.vue';
import User from './helper/User.vue'
import Status from './helper/Status.vue';
import Description from './helper/Description.vue';
import Comment from './helper/Comment.vue';
import Button from './helper/Button.vue';
import Input from './helper/Input.vue'
import SelectStatus from './helper/SelectStatus.vue';
export default {
  name: 'Ticket',
  components: {
      Header,
      Type,
      Group,
      User,
      Status,
      Description,
      Comment,
      Button,
      Input,
      SelectStatus,
    }
}
</script>