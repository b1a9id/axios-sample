import axios from 'axios';

axios.get(`https://api.github.com/users/b1a9id/repos`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (response) {
        console.log(response);
    });