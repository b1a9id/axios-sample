import Vue from 'vue';
import axios from 'axios';

axios.get(`https://api.github.com/users/b1a9id/repos`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });

Vue.component('my-component', {
    template: '<div>TEST</div>'
})

new Vue({
    el: '#example'
})