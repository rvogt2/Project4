import connection from './connection.js';

let recordedQuestions = '';

connection.connect(function(err){
    if(err)throw err;
    connection.query("SELECT * FROM questions", function (err,result,fields){
    if(err) throw err;
    recordedQuestions = result;
    });
});
export default recordedQuestions;