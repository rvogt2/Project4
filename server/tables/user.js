import connection from './connection.js';

let recordedUsers = '';

connection.connect(function(err){
    if(err)throw err;
    connection.query("SELECT * FROM user", function (err,result,fields){
    if(err) throw err;
    recordedUsers = result;
    });

});
export default recordedUsers;