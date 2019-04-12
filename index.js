const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;
const managerRouter = require('./routes/manager/managerRoutes');

//body-parser to get infos from POST URL parameters
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

// going to be used by express first
app.use(express.static('public')); 

//View Engine
app.set('views','./app/views');
app.set('view engine','ejs');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "OPTIONS") 
        res.sendStatus(200)
    else 
        next();
}

app.use(allowCrossDomain);

app.use('/api', managerRouter);

console.log(`app is running on port ${port}`)
//listen and start the server
app.listen(port);


