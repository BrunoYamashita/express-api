let app = require('../bin/app');
let mongoose = require('mongoose');
let should = require('chai').should;
let expect = require('chai').expect;
let request = require('supertest');
let connectionString = process.env.NODE_ENV == 'production'
  ? 'mongodb://mongo:27017/local'
  : 'mongodb://localhost/local'

describe('#BooksController', function() {

    before(function(done) {
        mongoose.connect(connectionString).then(()=>{
            done();
        })
    });

    it('#Books list',(done)=> {
        request(app)
        .get('/book')
        .expect('Content-Type', /json/)
        .expect('Content-Length', '4')
        .expect(200, "ok")
        .end(function(err, res){
           if (err) throw err;
        });
        // request.get('/book')
        //     .set('Accept', 'application/json')
        //     .expect(200)
        //     .expect(function(res) {
        //         expect(res.body).to.be.a('array');
        //     })
        //     .end(function(err, res) {
        //         if (err) throw err;
        //         done();
        //       });
            
    });

    it('#Books list filtered by title',(done)=> {
        request.get('/book/by-title/:title')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('#Books list filtered by author', (done) =>{
        request.get('/book/by-author/:author')
            .set('Accept', 'application/json')
            .expect(200, done);
    });

    it('#Books create invalid', (done)=> {
        request.post('/book')
            .send({titulo: "", descricao: "novo livro"})
            .expect(400, done);
    });

    it('#Books create valid', (done)=> {
        request.post('/book')
            .send({titulo: "titulo", descricao: "novo livro", preco: 20.50})
            .expect(302, done);
    });
});
