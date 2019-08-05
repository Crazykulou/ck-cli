const axios = require('axios')
axios.get('/index',{
	baseURL:'http://127.0.0.1:8888/test/',
	timeout:1000
})
.then(function (response) {
    // handle success
    console.log(response.data);
})
.catch(function (error) {
    // handle error
    console.log(error);
});