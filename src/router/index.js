import Vue from 'vue';
import VueRouter from 'vue-router';
import RouletteRoom from '../views/rouletteRoom/RouletteRoom.vue';
import TeamRoom from '../views/teamRoom/TeamRoom.vue';
import HallOfFame from '../views/hallOfFame/HallOfFame.vue';
import TeamRedactor from '../views/teamRedactor/TeamRedactor.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        component: RouletteRoom,
    },
    {
        path: '/hall-of-fame',
        component: HallOfFame,
    },
    {
        path: '/team-room',
        component: TeamRoom,
    },
    {
        path: '/add',
        component: TeamRedactor,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;