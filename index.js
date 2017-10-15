const express = require('express');
const app = express();
require('./db/db');
const petController = require('./controllers/petController');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use('/pet', petController);





app.listen(3000, () => {
	console.log("The 3000 port is working")
});