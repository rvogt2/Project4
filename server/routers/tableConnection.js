import * as mysql from 'mysql2';
import express from 'express';
let data;
const router = express.Router()

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

export const connectInit = async () => {
connection.connect(function(err){
  if(err){
  console.error("ERROR: ",err);
  process.exit(1);
}
else{
  console.log('Connection successful ');
  return data;
}
})
}
export const endConnection = async()=>{
  connection.end((err)=>{
    if(err){
      console.error('error closing connection: ',err)
      process.exit(1);
    }
    else {
      console.log('connection closed');
    }
  })
}
//internal command to gather all users for login function
export const queryUsers = async() => {
    
    data = connection.query('SELECT * FROM user',
        async function (err, results, fields) {
        if (err){
            console.log(err)
    }
    else{
    console.log("results :", results); //search results
    console.log("fields :", fields); //requirements for a user.
    return results;
    }});
}
//internal command to gather all questions for lookup function
export const queryQuestions = async() => {
    data = connection.query('SELECT * FROM questions',
        async function (err, results, fields) {
        if (err){
            console.log(err)
    }
    else {
        data = JSON.stringify(data);
    console.log("results :", results); //search results
    console.log("fields :", fields); //requirements for a user.
    return results;
    }});
}
//function to allow a user to add a question
export const addQuestion = async() => {
    data = connection.query('INSERT INTO questions VALUES(?,?,?);',[question,answer,category]);
    console.log("updated questions");
}
//function to allow a user to set a new login
router.post('/users', async(req,res)=>{})
export const addUser = async() => {
    data = connection.query('INSERT INTO user VALUES(?,?);',[question,answer,category]);
    console.log("updated users");
}


export default {connectInit,endConnection,queryUsers,queryQuestions,addQuestion,addUser};

