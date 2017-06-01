/**
 * Created by eduinfo on 2017-05-19.
 */

const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const router = require('./route/router');
const bodyParser = require('body-parser');

/*
const router = express.Router();

router.get('/', ( err, res) =>{

     res.send("New Server 올렸어요.!!!");
});
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));
//false : String, Object
//true : any Type

app.use(router);

app.listen(port, err => {

    if(err) console.log(err);
    else console.log("서버 가동 완료");
})