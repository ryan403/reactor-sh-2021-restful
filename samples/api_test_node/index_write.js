const axios = require('axios');

let new_data = JSON.stringify({
    id:5,
    iten:"The Fiances",
    artist:"Pieer Auguste Renoir",
    collection:"Wallraf-Richartx Museum, Cologne, Germany",
    date:"1868"
});

var axios_write_data = {
    method:"post",
    url:"http://localhost:3000/objects",
    headers:{
        "content-type":"application/json"
    },
    data:new_data
};

axios(axios_write_data)
.then(function(response){
    console.log(JSON.stringify(response.data));
})
.catch(function(error){
    console.log(error);
});