const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const Rperyear = require('./models/Rperyear');
const Rcpercat= require('./models/Rcpercat');
const Rpstar= require('./models/Rpstar');


// DB Config
require('./config/db');

const app = express();

const poll = require('./routes/poll');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

app.use('/poll', poll);


app.get('/json1', (req, res) => {


//Coll 1
Rperyear.find().then(Rperyears => res.json({ success: true, Rperyears: Rperyears }));
//Vote.find().then(votes => res.json({ success: true, votes: votes }));
//console.log(Rperyear.Rperyears);
});


//Coll2
app.get('/json2', (req, res) => {


console.log('json2 working');
    Rcpercat.find().then(rcpercats => res.json({ success: true, Rcpercats: rcpercats }));
   // console.log(Rcpercats);
    //Vote.find().then(votes => res.json({ success: true, votes: votes }));
    
    });
    //Coll3
app.get('/json3', (req, res) => {


    console.log('json3 working');
        Rpstar.find().then(rpstars => res.json({ success: true, Rpstars: rpstars }));
       // console.log(Rcpercats);
        //Vote.find().then(votes => res.json({ success: true, votes: votes }));
        
        });
        

const port = 3000;



// Start server
app.listen(port, () => console.log(`Server started on port ${port}`));
