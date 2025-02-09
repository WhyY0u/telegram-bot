import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/login/Login.vue'; 
import TicketList from '../components/ticketlist/TicketList.vue'
import Ticket from '../components/ticketlist/components/Ticket.vue';
import AddTicket from '../components/addticket/AddTicket.vue';
const routes = [
  { path: '/', component: Login },
  { path: '/tickets', name: 'tickets', component: TicketList},
  { path: '/ticket/:id', name: 'ticket', component: Ticket},
  { path: '/ticket/add', name: 'add_ticket', component: AddTicket},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
