let express=require("express");
let path=require("path");
let cookieParser=require("cookie-parser");
let bodyParser=require("body-parser");
let hbs=require("express-handlebars");
let expressValidator=require("express-validator");

let mongo=require("mongodb");
let mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/loginapp');
let db=mongoose.connection;

var routes=require('./routes/index');
var users=require('./routes/users');

var app=express();

app.engine('hbs',hbs({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname,'public')));




app.use('/',routes);
app.use('/users',users);

app.set('port',(process.env.PORT || 5000));
app.listen(app.get('port'),function(){
	console.log('Server started at port '+app.get('port'));
});
