var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var request = require('request');
var bodyParse = require('body-parser');
var db = require('./database/db.js');
var searchRouter = require('./router/searchRouter.js');
var userRouter = require('./router/userRouter.js');
var dishRouter = require('./router/dishRouter.js');
app.use(cors())
app.use(bodyParse.json({limit: '50mb'}));

app.use(express.static(__dirname + '/../client/')) 


=======
var dishRouter = require('./router/dishRouter.js');
>>>>>>> upstream/dev
app.use(cors())
app.use(bodyParse.json({limit: '50mb'}));
app.configure(function(){
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
});

app.use(express.static(__dirname + '/../client/')) 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
///


app.get('/locationSearch/:search', autocomplete);

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

////

connection.connect();

connection.connection(function(err){
  if(err) throw err;
  console.log('You are now connected...')
});

app.get('/searchFood', function(req, res){
    //this.state.page === foodSearch
  function fetchBestFood(req, callback){
    var bestFood = 'SELECT restaurant_name, address, imageUrl, location_name FROM Dishes WHERE location_name = ' req.location  ' , 'req.foodType' = dish_name INNER JOIN Locations, Restaurants ORDER BY voteCount desc LIMIT 1';

    connection.query(bestFood, function(err, rows){
        if(err){
          callback(err, null);
        } else{
          callback(null, rows[0])
        }
       });
  };
  var topResult;
  fetchBestFood(req, function(err, content){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      topResult = content;
      console.log(topResult);
      res.send("Top result is -" + topResult);
    }
  })
})
  
  


//////////
  // app.get('/signin', function (req, res) {
  //   render(req, res);
  // });

  // app.post('/signin', facebook.authenticate('signin', {
  //   successRedirect: '/',
  //   failureRedirect: '/signin',
  //   failureFlash: true
  // }));


  // app.get('/logout', function (req, res) {
  //   req.logout();
  //   res.redirect('/');
  // });

  // //
  // function auth(req, res, next) {
  //   if (!req.isAuthenticated()) {
  //     res.redirect('/signin');
  //   } else {
  //     return next();
  //   }
  // }
  // API Routes
  app.use('/API', auth, api);

  // Rendered routes
  app.use('*', auth, function (req, res) {
    render(req, res);
  });

  // 404 Error handling
  app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });


app.use('/api/user', userRouter)
app.use('/api/search', searchRouter)
app.use('/api/dish', dishRouter)
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  db.ensureSchema()
  console.log('we are now listening on ', app.get('port'))
})
