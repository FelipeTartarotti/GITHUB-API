const express = require('express');
const router = express.Router();
const github = require('../service/github');



//This endpoint must return a list of GitHub users and the link for the next page.
//https://api.github.com/users?since=99&per_page=50


router.get('/users?',async (req,res,next)=>{  
    try{

        github.getUsers(req.query.since,req.query.per_page).then((result) => {
            return res.send(result);  
        })
        .catch((error) => {
            return res.send(error);
        }); 

    }catch(err){

        return res.status(400).send({error: '_Error loading users_'});
    }
});


// GET - /api/users/:username/details   
//This endpoint must return the details of a GitHub user


router.get('/users/:username/details',async (req,res)=>{   
  
    try{                                                   

        github.getUsersDetails(req.params.username).then((result) => {
            return res.send(result);  
        })
        .catch((error) => {
            return res.send(error);
        }); 

    }catch(err){

        return res.status(400).send({error: '_Error loading users details_'});
    }
});


//GET - /api/users/:username/repos
//This endpoint must return a list with all user repositories


router.get('/users/:username/repos',async (req,res)=>{   

    try{     

        github.getUserRepo(req.params.username).then((result) => {
            return res.send(result);  
        })
        .catch((error) => {
            return res.send(error);
        }); 

    }catch(err){

        return res.status(400).send({error: '_Error loading users repos_'});
    }
});


module.exports = app => app.use('/api',router);

