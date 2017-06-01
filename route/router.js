/**
 * Created by eduinfo on 2017-05-19.
 */
const express =  require('express');
const route = express.Router();
const user = require('../controller/user');

const auth = require('../auth/auth')

route.route('/user')
    .post(user.createUser)
    .get(auth.isBasicAutheenticated, user.readUser)
    .put(auth.isBasicAutheenticated, user.updateUser)
    .delete(auth.isBasicAutheenticated, user.deleteUser)

route.route('/userTest')
    .get((req, res) =>{
        console.log(req.query);
        
        res.send("확인");
    })
    .post((req, res) =>{

        console.log(req.body);

        res.send("Post방식");
    })

route.route('/userTest/:id')
    .get((req, res) =>{
    //업데이트나 삭제
        console.log(req.query);

        res.send("확인22");
    })
module.exports = route;

//Create = Post
//Read = Get
//Update = Put
//Delete = Delete

//GitHub 푸쉬