<script>
import Menu from './components/Menu.vue';
import Card from './components/Сard.vue';
import ButtonAdd from './components/helper/ButtonAdd.vue'
import axios from 'axios';
export default {
    name: 'TicketList',
    components: {
        Menu,
        Card,
        ButtonAdd,
    },
    data() {
    return {
      cards: [],
      sorting: 'default',
      loading: false, 
      page: 0,
      totalPages: 0,
      role: '',
      search: '',
    }
},
methods: {
  fetchData() {
      const serverIp = import.meta.env.VITE_SERVER_IP;
      if(this.loading || this.page > this.totalPages) return;
      this.loading = true;
      if(this.search === '') {
      axios.get(serverIp + `/api/v2/ticket/tickets?sort=${this.sorting}&page=${this.page}&size=10`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(r => {
        const response = r.data.reponse || [];
        const ticket = r.data.ticketsResponse || [];
        this.cards = [...this.cards, ...response.length ? response : ticket];
        this.totalPages = r.data.totalPages - 1;
        this.role = r.data.role;
        this.page += 1;
        console.log("work")
      }).finally(() => {
        this.loading = false; 
      });
    } else {
      axios.get(serverIp + `/api/v2/ticket/search?sort=${this.sorting}&page=${this.page}&size=10&search=${this.search}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(r => {
        const response = r.data.reponse || [];
        const ticket = r.data.ticketsResponse || [];
        this.cards = [...this.cards, ...response.length ? response : ticket];
        this.totalPages = r.data.totalPages - 1;
        this.role = r.data.role;
        this.page += 1;
      }).finally(() => {
        this.loading = false; 
      });
    }
    },
    handleScroll() {
    const contentElement = document.querySelector('.content');
    if (!contentElement) return;

    const scrollHeight = contentElement.scrollHeight;
    const scrollTop = contentElement.scrollTop; 
    const clientHeight = contentElement.clientHeight; 


    if (scrollHeight - scrollTop - clientHeight <= 10 && !this.loading) {
      this.fetchData(); 
    }
  }
},

mounted() {
  const serverIp = import.meta.env.VITE_SERVER_IP;
  this.fetchData();
  console.log("mounted");
  const contentElement = document.querySelector('.content'); 
  if (contentElement) {
    contentElement.addEventListener('scroll', this.handleScroll);
  }
  axios.post(serverIp + '/api/v2/ticket/check', {}, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
     }).catch(e => {
      this.$router.push({name: 'login'});
      localStorage.removeItem('item')
     })
},

beforeDestroy() {
  const contentElement = document.querySelector('.content');
  if (contentElement) {
    contentElement.removeEventListener('scroll', this.handleScroll); 
  }
},
watch: {
  sorting(newSorting, oldSorting) {
      this.page = 0; 
      this.cards = []; 
      this.fetchData(newSorting); 
  },
  search(newSearch, oldSearch) {
      this.page = 0; 
      this.cards = []; 
      this.fetchData(this.sorting);
  }
},
beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchData());
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next();
  }
  
};
</script>

<template>
    <div class="container">
      <div class="container_menu">
        <Menu @set-sorting="sorting = $event" @set-search="search = $event"/>
      </div>
        <div class="container_card">
                <Card
          v-for="(card, index) in cards"
          :key="index"
          :type="card.type"
          :name="card.userName"
          :group="card.userGroup"
          :heading="card.name"
          :status="card.status"
          :description="card.description"
          :id="card.id"
        />
</div>
<ButtonAdd v-if="role != 'Administrator'"/>
</div>
</template>

<style>
.container {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.container_menu {
  position: relative;
  width: 100%;
  height: 42px;
  top: 80px;
}
.container_card {
    position: relative;
    top: 150px;
    width: 90%;
    max-width: 370px;
    min-width: 200px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
}
.scroll::-webkit-scrollbar {
    display: none;
}
.fade-out {
    transform: scale(0.0);
}

</style>
