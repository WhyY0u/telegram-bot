import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login/Login.vue'; 
import TicketList from '../components/ticketlist/TicketList.vue'
const routes = [
  { path: '/', component: Login },
  { path: '/tickets', name: 'tickets', component: TicketList},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
