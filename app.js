var express = require('express')
  , mongoskin = require('mongoskin')

var app = express()
app.use(express.bodyParser())

var db = mongoskin.db('localhost:27017/test', {safe:true});

var pageSize = 10

app.param('collectionName', function(req, res, next, collectionName){
  req.collection = db.collection(collectionName)
  return next()
})

app.get('/', function(req, res, next) {
  res.send('please select a collection, e.g., /api/messages')
})

app.get('/api/:collectionName', function(req, res, next) {
  req.collection.find({},{limit:pageSize, sort: [['_id',-1]]}).toArray(function(e, results){
    if (e) return next(e)
    res.send(results)
  })
})

app.post('/api/:collectionName', function(req, res, next) {
  req.collection.insert(req.body, {}, function(e, results){
    if (e) return next(e)
    res.send(results)
  })
})


app.get('/api/:collectionName/:id', function(req, res, next) {
  req.collection.findOne({_id: req.collection.id(req.params.id)}, function(e, result){
    if (e) return next(e)
    res.send(result)
  })
})
app.put('/api/:collectionName/:id', function(req, res, next) {
  req.collection.update({_id: req.collection.id(req.params.id)}, {$set:req.body}, {safe:true, multi:false}, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  })
})
app.del('/api/:collectionName/:id', function(req, res, next) {
  req.collection.remove({_id: req.collection.id(req.params.id)}, function(e, result){
    if (e) return next(e)
    res.send((result===1)?{msg:'success'}:{msg:'error'})
  })
})

app.get('/api/:collectionName/page/:pageNumber', function(req, res, next) {
  req.collection.find({},{skip: pageSize * (req.params.pageNumber - 1), limit:pageSize, sort: [['_id',-1]]}).toArray(function(e, results){
    if (e) return next(e)
    res.send(results)
  })
})

app.del('/api/:collectionName', function(req,res,next){
  req.collection.remove({},{},function()
    {
      res.send({msg:"removed " + req.params.collectionName})
    })
})


console.log("listening on 3000")
app.listen(3000)