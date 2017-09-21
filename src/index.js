import Vue from 'vue';
import axios from 'axios';



Vue.component('my-component', {
    props:['comp'],
    template: '<div>id = {{ comp.id }}<div>name = {{ comp.name }}</div></div>'
})

var vm = new Vue({
    el: '.example',
    data: {
        repos: []
    },
    mounted: function() {
        axios.get(`https://api.github.com/users/b1a9id/repos`)
        .then(response => {
            this.repos = response.data;
            console.log(this.repos);
        })
    }
})