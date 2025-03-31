import express from 'express';
import cors from 'cors';

import mysql from 'mysql2';

let recordedUsers = {}
let recordedQuestions = {};

const router = express.Router();
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

connection.connect(function(err){
    if(err)throw err;
    connection.query("SELECT * FROM user", function (err,result,fields){
    if(err) throw err;
    recordedUsers = result;
    });
});

connection.connect(function(err){
    if(err)throw err; //detects if something went wrong, prior to the query rendering (couldnt connect?)
    connection.query("SELECT * FROM questions", function (err,result,fields){
    if(err)throw err; //detects if something went wrong AFTER the query rendering (improper format?)
    recordedQuestions = result;
    });
});

const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', recordedUsers);
app.use('/question', recordedQuestions);
app.get('/', async function(req,res){
    res.send('server response: OK');
});

router.get('/user', async function (req,res){
    res.status(202).json({user:data[0]})
});

router.get('/questions', async function(req,res){
    res.status(202).json({questions:data[0]})
});

app.listen(5000,()=>{
    console.log(`listening on port 5000`);
});

