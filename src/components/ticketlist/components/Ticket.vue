<template>
<div class="container">
  <Header :text="ticket.header"/>
<div class="container_middle">
  <Type :text="ticket.type"/>
  <Group :text="ticket.group"/>
</div>
 <div class="container_two">
  <User v-if="ticket.usertype == 'Admin'" :text="ticket.userName"/>
  <Status :status="ticket.status" v-if="ticket.usertype == 'User'"/>
 </div>
 <Description :text="ticket.description" />
  <Comment v-if="ticket.comment != null && ticket.comment != undefined" :comment="ticket.comment" :from="'Администрация'"/>
<div class="container_three">
  <Input v-if="ticket.usertype == 'Admin'" :error="error_comment" @set-error="error_comment = $event" @set-text="commentString = $event"/>
  <SelectStatus v-if="ticket.usertype == 'Admin'" @set-status="status = $event"/>
  <div class="container_four">
    <Button :right="false" :color=" ticket.usertype == 'Admin' ? 'green' : 'red'" @click="ticket.usertype == 'Admin' ? onClickSave() : onClickDelete()" :name=" ticket.usertype == 'Admin' ? 'Сохранить' : 'Удалить'"/>
    <Button :right="true" :color="'red'" @click="onClickBack" :name="'Выход'"/>
</div>
</div>
</div>
</template>


<style scoped>
 .container {
  position: relative;
  width: 100%;
  top: 10px;
  height: calc(100% + 260px);
  display: flex;
  flex-direction: column;
  
}
.container_middle {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  top: 80px;
}
.container_two {
  position: relative;
  width: 100%;
  height: 60px;
  top: 30px;
}
.container_three {
  position: relative;
  width: 100%;
  height: 60px;
  top: 0px;
}
.container_four {
  position: relative;
  width: 100%;
  height: 100px;
  top: 40px;
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
import axios from 'axios';
export default {
  name: 'Ticket',
  methods: {
    onClickBack() {
      this.$router.push('/tickets');
    },
    onClickSave() {
      if(this.commentString.length > 0 &&  this.commentString.length < 35) {
        this.error_comment = true;
        return;
      }
      const serverIp = import.meta.env.VITE_SERVER_IP;
      const requestBody = {
          ticketId: this.ticket.id,
          ...(this.status !== null && this.status.length > 0 && { status: this.status }),
          ...(this.commentString !== null && this.commentString.length > 0 && { comment: this.commentString }),
        };
console.log(requestBody);

      axios.post(serverIp + `/api/v2/ticket/update/ticket`, requestBody, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(r => {
        this.$router.push('/tickets');
      });


    },
    onClickDelete() {
       const serverIp = import.meta.env.VITE_SERVER_IP;
       const ticketId = this.$route.params.id; 
      axios.delete(serverIp + `/api/v2/ticket/deleteTicket/${ticketId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(r => {
        this.$router.push('/tickets');
      });
    },
  },
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
    },
    data() {
  return {
    commentString: {
      type: String
    },
    error_comment: false,
    status: {
      type: String,
    },
    ticket: []
    
  };
},
mounted() {
  const serverIp = import.meta.env.VITE_SERVER_IP;
  const ticketId = this.$route.params.id; 
      axios.get(serverIp + `/api/v2/ticket/get/` + ticketId, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(r => {
        this.ticket = r.data;
      }).catch(c => localStorage.removeItem('token'));

      axios.post(serverIp + '/api/v2/ticket/check', {}, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     }).catch(e => {
      this.$router.push({name: 'login'});
      localStorage.removeItem('item')
     })
},
}
</script>