import Vue from 'vue';
import axios from 'axios';

axios.get(`https://api.github.com/users/b1a9id/repos`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });
var data = {msg: 'Hello'};
Vue.component('my-component', {
    template: '<div>TEST{{ msg }}</div>',
    data: function() {
        return data;
    }
})

new Vue({
    el: '#example'
})