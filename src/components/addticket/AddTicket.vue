<template>
<div class="container_add">
    <SelectType v-model="selectedType" />
    <InputHeader :error="error_header" :hide="selectedType == ''" @set-error="error_header = $event" @set-text="headerString = $event"/>
   <div class="container_1">
    <Type :hide="selectedType == ''" :text="selectedType"/>
    <Group :hide="selectedType == ''" :text="'CИБ-333'"/>
   </div>
    <User :hide="selectedType == ''"  :text="'Древов Даниил Николаевич'"/>
    <Input :error="error_comment" :hide="selectedType == ''" @set-error="error_comment = $event" @set-text="descriptionString = $event"/>
<div class="button_container">
    <Button :hide="selectedType == ''" :right="false" :color="'green'" :name="'Отправить'" @click="save"/>
    <Button :hide="selectedType == ''" :right="true" :color="'red'" :name="'Назад'" @click="back"/>
</div>
</div>
</template>

<style>
.container_add {
    position: relative;
    width: 100%;
    height: calc(100% - 200px);
    left: 0px;
    top: 85px;
}
.container_1 {
    display: flex;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
}
.button_container{
    position: relative;
    margin-top: 10px;
    height: 80px;
}
</style>

<script>
import InputHeader from './helper/InputHeader.vue';
import SelectType from './helper/SelectType.vue';
import Type from '../ticketlist/components/helper/Type.vue'
import Group from '../ticketlist/components/helper/Group.vue';
import User from '../ticketlist/components/helper/User.vue';
import Input from '../ticketlist/components/helper/Input.vue';
import Button from '../ticketlist/components/helper/Button.vue';

export default {
  name: 'AddTicket',
  components: {
    SelectType,
    InputHeader,
    Type,
    Group,
    User,
    Input,
    Button,
  },
  methods: {
    back() {
        this.$router.push('/tickets');
    },
    save() {
        if(this.headerString.length < 4) {
            if(this.descriptionString.length < 35)  this.error_comment = true;
            this.error_header = true;
            return;
        }
        console.log(this.descriptionString.length);
        if(this.descriptionString.length < 35)  {
           this.error_comment = true;
           return;
        }
        this.$router.push('/tickets');
    },
  },
  data() {
    return {
      selectedType: '',
      headerString: '',
      descriptionString: '',
      error_header: false,
      error_comment: false,

    }
  },
  watch: {
    selectedType(newVal, oldVal) {
      console.log('selectedType изменился с', oldVal, 'на', newVal);
    },
  }
}
</script>