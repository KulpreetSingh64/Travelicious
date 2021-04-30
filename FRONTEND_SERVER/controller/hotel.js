const request = require('request');

const apiOptions = {
    server : "http://localhost:3000"
}

 /* Controller for hotels by country */

module.exports.bycountry = function(req, res){
    
    const path = `/travel/getHotelsByCountry/?country=${req.body.stays__going_to}`
    req.cookies['atoken'];
    
    const requesOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        headers: {
            'x-access-token':  req.cookies['atoken']
        },
        json : {}
    }

    request(requesOptions,(err, response, body) => {
        if(response.statusCode == 200){
            _renderDetailsPage(req, res, body);
        }
        else{
            res.redirect("/login");
        }
        
    });

}


const _renderDetailsPage = function(req, res, body){
    res.render('details', {
        Hotels : body,
        title : "I am working"
    });
}
