<template>
<div class="container_add">
    <SelectType v-model="selectedType" />
    <InputHeader :error="error_header" :hide="selectedType == ''" @set-error="error_header = $event" @set-text="headerString = $event"/>
   <div class="container_1">
    <Type :hide="selectedType == ''" :text="selectedType"/>
    <Group :hide="selectedType == ''" :text="response.Group"/>
   </div>
    <User :hide="selectedType == ''"  :text="response.Name"/>
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
import axios from 'axios';

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
      const serverIp = import.meta.env.VITE_SERVER_IP;
      axios.post(serverIp + '/api/v2/ticket/createTicket', {
        name: this.headerString,
        type: this.selectedType == "Жалоба" ? "Complaint" : "Offer",
        description: this.descriptionString
      }, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     }).then(r => this.response = r.data)
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
      response: []

    }
  },
  mounted() {
    const serverIp = import.meta.env.VITE_SERVER_IP;
    axios.post(serverIp + '/api/v2/ticket/info', {}, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     }).then(r => this.response = r.data)

    axios.post(serverIp + '/api/v2/ticket/check', {}, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     }).catch(e => {
      this.$router.push({name: 'login'});
      localStorage.removeItem('item')
     })
  }
}
</script>