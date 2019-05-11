const request = require('request');

function getUsers(since,per_page){

    var options = {
        url: "https://api.github.com/users?since="+since+"&per_page="+per_page,
        method: 'GET',
        headers: {
            'User-Agent': 'FelipeTartarotti'
          }
    }
        
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
            resolve(body);
        }
        else
            reject(error);
        });
    });
}

function getUsersDetails(username){

    var options = {
        url: "https://api.github.com/users/"+username,
        method: 'GET',
        headers: {
            'User-Agent': 'FelipeTartarotti'
          }
    }
        
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
            resolve(body);
        }
        else
             reject(error);
        });
    });

}

function getUserRepo(username){

    var options = {
        url: "https://api.github.com/users/"+username+"/repos",
        method: 'GET',
        headers: {
            'User-Agent': 'FelipeTartarotti'
          }
    }
        
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            
        if (!error && response.statusCode == 200) {   
            resolve(body);
        }
        else
             reject(error);
        });
    });

}

module.exports = {getUsers,getUsersDetails,getUserRepo};