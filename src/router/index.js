import Vue from 'vue';
import VueRouter from 'vue-router';
import RouletteRoom from '../views/rouletteRoom/RouletteRoom.vue';
import TeamRoom from '../views/teamRoom/TeamRoom.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'RouletteRoom',
    component: RouletteRoom,
  },
  {
    path: '/team-room',
    name: 'TeamRoom',
    component: TeamRoom,
  },
  {
    path: '/hall-of-fame',
    name: 'HallOfFame',
    component: TeamRoom,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
