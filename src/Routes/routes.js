import Register from "../components/Register.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Login from '../components/Login.vue';
import BloomAdmin from '../components/Admin.vue';
import UserProfile from '../components/UserProfile.vue';
import AdminProfile from '../components/AdminProfile.vue';
import NewOrder from '../components/NewOrder.vue';
import OrderHistory from '../components/OrderHistory.vue';
import CommissionReport from '../components/ComReport.vue';


export default [
    {
        path:'/',
        component:HelloWorld
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login/:myid',
        component:Login
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/admin',
        component:BloomAdmin
    },
    {
        path:'/userprofile',
        component:UserProfile
    },
    {
        path:'/adminprofile',
        component:AdminProfile
    },
    {
        path:'/neworder',
        component:NewOrder
    },
    {
        path:'/orderhistory',
        component:OrderHistory
    },
    {
        path:'/commissionreport',
        component:CommissionReport
    }
    
]