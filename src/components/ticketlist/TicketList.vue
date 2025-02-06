<script>
import Menu from './components/Menu.vue';
import Card from './components/Сard.vue';
export default {
    name: 'TicketList',
    components: {
        Menu,
        Card,
    },
    data() {
    return {
      cards: [],
    }
},
mounted() {
 this.cards = [
 {
          id: 1,
          type: 'Жалоба',
          name: 'Древов Даниил Николаевичь',
          group: 'ПО-263',
          heading: 'Проблема',
          status: 'Выполняется',
          description: 'Sample description text',
          isVisible: true, 
        },
        {
          id: 2,
          type: 'Жалоба',
          name: 'Древов Даниил Николаевичь',
          group: 'ПО-263',
          heading: 'Проблема',
          status: 'Выполнено',
          description:
            'Sample description text ample description text ample description text ample description text ample description text ample description text ample description text',
          isVisible: true,
        },
        {
          id: 3,
          type: 'Жалоба',
          name: 'Древов Даниил Николаевичь',
          group: 'ПО-263',
          heading: 'Проблема',
          status: 'Отклонено',
          description:
            'Sample description text ample description text ample description text ample description text ample description text ample description text',
          isVisible: true,
        },
        {
          id: 4,
          type: 'Предложения',
          name: 'Древов Даниил',
          group: 'ПО-263',
          heading: 'Предложения',
          status: 'Ожидание',
          description:
            'Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text Sample description text',
          isVisible: true,
        },
 ]
},
    
};
</script>

<template>
    <div class="container">
        <Menu/>
        <div class="container_card">
            <div class="scroll">
                <Card
          v-for="(card, index) in cards"
          :key="index"
          :type="card.type"
          :name="card.name"
          :group="card.group"
          :heading="card.heading"
          :status="card.status"
          :description="card.description"
          :id="card.id"
        />
    </div> 
</div>
</div>
</template>

<style>
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

}

.container_card {
    position: relative;
    top: 200px;
    width: 90%;
    max-width: 370px;
    min-width: 200px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);

}
.scroll {
    position: absolute;
    width: 100%;
    height: calc(100% - 220px);
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
}
.scroll::-webkit-scrollbar {
    display: none;
}
.fade-out {
    transform: scale(0.0);
}

</style>
