<template>
<div class="container">
  <Header :text="ticket.heading"/>
<div class="container_middle">
  <Type :text="ticket.type"/>
  <Group :text="ticket.group"/>
</div>
 <div class="container_two">
  <User v-if="ticket.user_type == 'Admin'" :text="ticket.name"/>
  <Status :status="ticket.status" v-if="ticket.user_type == 'User'"/>
 </div>
 <Description :text="ticket.description" />
  <Comment v-if="ticket.comment != null && ticket.comment != undefined" :comment="'драствуйте уважаймая администрация у меня не работает душ уже 2 недели драствуйте уважаймая администрация у меня не работает душ уже 2 недели драствуйте уважаймая администрация у меня не работает душ уже 2 недели драствуйте уважаймая администрация у меня не работает душ уже 2 недели фото снизу показвает что у драствуйте уважаймая администрация у меня не работает душ уже 2 недели фото снизу показвает что у драствуйте уважаймая администрация у меня не работает душ уже 2 недели фото снизу показвает что у '" :from="ticket.from"/>
<div class="container_three">
  <Input v-if="ticket.user_type == 'Admin'" :error="error_comment" @set-error="error_comment = $event" @set-text="commentString = $event"/>
  <SelectStatus v-if="ticket.user_type == 'Admin'" @set-status="status = $event"/>
  <div class="container_four">
    <Button :right="false" :color=" ticket.user_type == 'Admin' ? 'green' : 'red'" @click="ticket.user_type == 'Admin' ? onClickSave() : onClickDelete()" :name=" ticket.user_type == 'Admin' ? 'Сохранить' : 'Удалить'"/>
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
export default {
  name: 'Ticket',
  methods: {
    onClickBack() {
      this.$router.push('/tickets');
    },
    onClickSave() {
      console.log(this.status);
      if(this.commentString.length > 0 &&  this.commentString.length < 35) {
        this.error_comment = true;
        return;
      }

    },
    onClickDelete() {

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
    ticket: 
      {
        type: 'Жалоба',
        user_type: 'User',
        name: 'Древов Даниил Николаевич',
        group: 'ПО-263',
        heading: 'Проблема с душем',
        status: 'Выполняется',
        description: 'Здраствуйте уважаймая администрация, у меня не работает душ уже 2 недели. Фото снизу показывает, что у нас происходит повреждение в трубах.',
        from: 'Жалпак Талгат Темиржанович',
        comment: 'Здравствуйте, уважаемая администрация, у меня не работает душ уже 2 недели. Фото снизу показывает, что у нас происходит повреждение в трубах. Будьте добры, примите меры.',
      }
    
  };
}
}
</script>