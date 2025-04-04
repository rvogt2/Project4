import express from 'express';
import cors from 'cors';
import 
    {connectInit,
    endConnection,
    queryUsers,
    queryQuestions,
    addQuestion,
    addUser}
from './routers/tableConnection.js';


const router = express.Router();
const app = express();

const corsOptions = {
 origin:"https://localhost:3000/"
}

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
    res.send('default');
});

app.get("/login", (req, res)=>{
    res.send('login');
});

app.get("/registration", (req,res)=>{
    res.send('registration');
})

router.get("/", (req, res)=>{
    res.send("response recieved!");
});
const port = 3001;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
    connectInit(); //connects
    queryUsers();
    queryQuestions();
    endConnection(); //disconnects
});