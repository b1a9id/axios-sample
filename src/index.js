import Vue from 'vue';
import axios from 'axios';



Vue.component('my-component', {
    props:['comp'],
    template: '<div>TEST{{ comp.id }}<div>TEST{{ comp.name }}</div></div>'
})

var vm = new Vue({
    el: '.example',
    data: {
        repos: [
            {
                "id": 67921833,
                "name": "algorithm-sample",
                "full_name": "b1a9id/algorithm-sample",
                "owner": {
                  "login": "b1a9id",
                  "id": 19252181,
                  "avatar_url": "https://avatars0.githubusercontent.com/u/19252181?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/b1a9id",
                  "html_url": "https://github.com/b1a9id",
                  "followers_url": "https://api.github.com/users/b1a9id/followers",
                  "following_url": "https://api.github.com/users/b1a9id/following{/other_user}",
                  "gists_url": "https://api.github.com/users/b1a9id/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/b1a9id/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/b1a9id/subscriptions",
                  "organizations_url": "https://api.github.com/users/b1a9id/orgs",
                  "repos_url": "https://api.github.com/users/b1a9id/repos",
                  "events_url": "https://api.github.com/users/b1a9id/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/b1a9id/received_events",
                  "type": "User",
                  "site_admin": false
                }
            },
            {
                "id": 93992212,
                "name": "angular-sample",
                "full_name": "b1a9id/angular-sample",
                "owner": {
                  "login": "b1a9id",
                  "id": 19252181,
                  "avatar_url": "https://avatars0.githubusercontent.com/u/19252181?v=4",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/b1a9id",
                  "html_url": "https://github.com/b1a9id",
                  "followers_url": "https://api.github.com/users/b1a9id/followers",
                  "following_url": "https://api.github.com/users/b1a9id/following{/other_user}",
                  "gists_url": "https://api.github.com/users/b1a9id/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/b1a9id/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/b1a9id/subscriptions",
                  "organizations_url": "https://api.github.com/users/b1a9id/orgs",
                  "repos_url": "https://api.github.com/users/b1a9id/repos",
                  "events_url": "https://api.github.com/users/b1a9id/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/b1a9id/received_events",
                  "type": "User",
                  "site_admin": false
                }
            }
            ]
    }
    // methods: {
        // getRepos: function() {
        //     axios.get(`https://api.github.com/users/b1a9id/repos`)
        //     .then(response => {
        //         this.repos = response.data[0];
        //         console.log(this.repos);
        //     })
        //     .catch(function (response) {
        //         console.log(response);
        //     });
        // }
    // },
    // mounted: function() {
    //     console.log('TEST1');
    //     this.getRepos();
    //     console.log('TEST2');
    // }
})