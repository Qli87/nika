import axios from 'axios';

//
//ADDED SOME COMENTS TO TEST GIT
//


var apiUrl = window.location.href.indexOf('admin.nika.me') >= 0 ? 'https://laravel.nika.me' : 'http://api.nika.test';

axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${localStorage.getItem('token')}`;
    config.headers.Accept = 'application/json';

    return config;
});



//
//added
//
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// /**
//  * Next we will register the CSRF Token as a common header with Axios so that
//  * all outgoing HTTP requests automatically have it attached. This is just
//  * a simple convenience so we don't have to attach every token manually.
//  */
// let token = document.head.querySelector('meta[name="csrf-token"]');
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }
//
//end
//








//login user
export function login_api(credentials) {
    return axios.post(apiUrl + '/api/sanctum/token', {
        email: credentials.payload.email,
        password: credentials.payload.password,
        device_name: "web"
    }).catch((error) => {
        if(error.response && error.response.data && error.response.data.error){
            return error.response.data.error;
        }
        
        return error.response.data;
    })
}
//check user auth with token and return user
export function checkUser_api(token) {
    return axios.post(apiUrl + "/api/check",{}, {
        headers: {'Authorization': 'Bearer ' + token }
    })
}

//get warehouse for user
export function getWarehouseForUser_api(user) {
    return axios.get(apiUrl + "/getWarehouse/" + user).catch((error) => {
        console.log('error in api ', error);
    })
}

//get all companies
export function getCompanyForSelect_api() {
    return axios.get(apiUrl + "/companies").catch((error) => {
        console.log('error in api ', error);
    })
}

//get all shops for comapnies
export function getShopsForCmp_api(action) {
    return axios.get(apiUrl + "/shops/" + action).catch((error) => {
        console.log('error in api ', error);
    })
}

//get articles
export function getArticlesForWarehouse_api(warehouse) {
    return axios.get(apiUrl + "/getArticles/" + warehouse).catch((error) => {
        console.log('error in api ', error);
    })
}

export function sendOrder_api(details) {
    return axios.post(apiUrl + "/sendOrder", details).catch((error) => {
        console.log('error in api ', error);
    })
}

export function sendOrderItem_api(details) {
    return axios.post(apiUrl + '/sendOrderItem', details)
}

//get max order id
export function getMaxId_api() {
    return axios.get(apiUrl + '/getMaxId')
}

//get invoices for warehouse
export function getInvoicesForWarehouse_api(warehouse) {
    return axios.get(apiUrl + "/getInvoicesForWarehouse/" + warehouse.payload + "?page="+ warehouse.page)
}

//get items for warehouse
export function getItemsForInvoice_api(details) {
    return axios.get(apiUrl + "/getItemsForInvoice/" + details.payload + "/"+ details.invoice)
}

//get company details
export function getComapnyDetails_api(company) {
    return axios.get(apiUrl + "/getCompanyDetails/" + company)
}

