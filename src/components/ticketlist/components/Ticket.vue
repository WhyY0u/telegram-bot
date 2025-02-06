<template>
<div class="container">
  <Header :text="'Жалоба'"/>
  <Type :text="'Жалоба'"/>
  <Group :text="'ПО-263'"/>

</div>
</template>


<style scoped>
 .container {
  position: absolute;
  width: 100%;
  height: 100%;
 }
</style>

<script>
import Header from './helper/Header.vue';
import Type from './helper/Type.vue';
import Group from './helper/Group.vue';

export default {
  name: 'Ticket',
  components: {
      Header,
      Type,
      Group,
    }
}
</script>