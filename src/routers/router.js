import Home from '../components/Home.vue';

export default {
    mode: 'history',        //adresteki # kaldırıyor
    routes: [
        {
            path: '/',
            component: Home,
        }
    ],
}
