import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/login/login.vue'
import Layout from '../view/layout.vue'
import House from '../view/house/index.vue' //房屋管理
import City from '../view/city/index.vue'   //地区维护
import Contact from '../view/contact/index.vue'   //联系人维护
import Administrator from '../view/administrator/index.vue'   //管理员
import HomeownersPay from '../view/homeowners_pay/index.vue'   //业主打款
import CompanyPay from '../view/company_pay/index.vue'   //公司打款
import PayDetails from '../view/pay_details/index.vue'   //收支名细
import CompanySendShop from '../view/company_send_shop/index.vue'   //公司发货单
import Worker from '../view/worker/index.vue'   //用工管理
import Company from '../view/company/index.vue'   //公司维护

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect : '/system/house'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/system',
            name : 'system',
            component: Layout,
            children : [
                {
                    path: '/',
                    redirect : '/system/house'
                },
                {
                    path: 'house',
                    component: House,
                    name : 'house'
                },
                {
                    path: 'city',
                    component: City,
                    name : 'city'
                },
                {
                    path: 'contact',
                    component: Contact,
                    name : 'Contact'
                },
                {
                    path: 'administrator',
                    component: Administrator,
                    name : 'administrator'
                },
                {
                    path: 'homeownersPay',
                    component: HomeownersPay,
                    name : 'homeownersPay'
                },
                {
                    path: 'companyPay',
                    component: CompanyPay,
                    name : 'companyPay'
                },
                {
                    path: 'payDetails',
                    component: PayDetails,
                    name : 'payDetails'
                },
                {
                    path: 'companySendShop',
                    component: CompanySendShop,
                    name : 'companySendShop'
                },
                {
                    path: 'worker',
                    component: Worker,
                    name : 'worker'
                },
                {
                    path: 'company',
                    component: Company,
                    name : 'company'
                },
            ]
        }
    ]
})
