import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header1.vue';

export const routes = [
    { path: '',  name: 'home', components: {
        default: Home,
            'header-top': Header
        } },
    { path: '/user',  components: {
            default: User,
            'header-bottom': Header,
        }, children : [
            {path: '', component : UserStart, props: true, name: 'userStart' },
            {path: ':userId', component : UserDetail, props: true, name: 'userDetail' },
            {path: ':userId/edit', component : UserEdit, props: true, name: 'userEdit' }
        ] },
    { path: '/redirect-me', redirect: '/user'},
    { path: '/redirect-me3', redirect: {name: 'userStart'}},
    { path: '*', redirect: {name: 'home'}}
];
