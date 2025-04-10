var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const headerlogRouter = require('./routes/headerLog');
const productaddRouter = require('./routes/product-add');
const productRouter = require('./routes/product');
const profileRouter = require('./routes/profile');
const registerRouter = require('./routes/register');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/headerlog', headerlogRouter);
app.use('/productadd', productaddRouter);
app.use('/product', productRouter);
app.use('/profile', profileRouter);
app.use('/register', registerRouter);

module.exports = app;
