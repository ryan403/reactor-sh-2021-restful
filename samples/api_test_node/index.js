const
    axios = require('axios'),
    config = require('config');

    const COOPER_HEWITT_ACCESS_TOKEN = config.get('CooperHewittAccessToken');

var axios_config = {
    method:"get",
    url:"https://api.collection.cooperhewitt.org/rest",
    headers:{},
    params:{
        method:"cooperhewitt.search.objects",
        access_token:COOPER_HEWITT_ACCESS_TOKEN,
        query:"clock radio",
        page:1,
        per_page:100
    }
};

axios(axios_config)
.then(function(response){
    console.log(JSON.stringify(response.data));
})
.catch(function(error){
    console.log(error);
});