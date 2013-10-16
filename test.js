var superagent = require('superagent')
var expect = require('expect.js')

describe('express rest api server', function(){
  var id

  it('post object', function(done){
    superagent.post('http://localhost:3000/api/users')
      .send({ name: 'John'
      })
      .end(function(e,res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.eql(1)
        expect(res.body[0]._id.length).to.eql(24)
        id = res.body[0]._id
        done()
      })
  })

  it('retrieves an object', function(done){
    superagent.get('http://localhost:3000/api/users/'+id)
      .end(function(e, res){
        //console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)
        expect(res.body._id).to.eql(id)
        done()
      })
  })

  it('retrieves a collection', function(done){
    superagent.get('http://localhost:3000/api/users')
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.length).to.be.above(0)
        expect(res.body.map(function (item){return item._id})).to.contain(id)
        done()
      })
  })

  it('updates an object', function(done){
    superagent.put('http://localhost:3000/api/users/'+id)
      .send({name: 'Peter'})
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')
        done()
      })
  })

  it('checks an updated object', function(done){
    superagent.get('http://localhost:3000/api/users/'+id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)
        expect(res.body._id).to.eql(id)
        expect(res.body.name).to.eql('Peter')
        done()
      })
  })
  it('removes an object', function(done){
    superagent.del('http://localhost:3000/api/users/'+id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('success')
        done()
      })
  })

  it('checks if object is removed', function(done){
    superagent.get('http://localhost:3000/api/users/'+id)
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id).to.eql(undefined)
        done()
      })
  })

  it('adds 15 new users and checks if pagination works as expected', function(done){
    var callback = function (e, res, i) 
    { 
      // console.log("calling callback with " + i)
      if (i < 15) {
        superagent.post('http://localhost:3000/api/users')
          .send({ name: 'user number ' + i}).end(function(e,res){
            callback(e,res,i+1)
          }) 
      }else{
        superagent.get('http://localhost:3000/api/users/page/1')
        .end(function(e, res){
          // console.log(res.body)
          expect(e).to.eql(null)
          expect(res.body.length).to.be.equal(10)

          superagent.get('http://localhost:3000/api/users/page/2')
          .end(function(e, res){
            // console.log(res.body)
            expect(e).to.eql(null)
            expect(res.body.length).to.be.equal(5)
            done()
          })
        })
      }
    }

    callback(null, null, 0)

  })

  it('cleans up after tests', function(done){
    superagent.del('http://localhost:3000/api/users')
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body.msg).to.eql('removed users')
        done()
      })
  })
})