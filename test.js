let app = require('./bin/app');
let expect = require('chai').expect;
let mongoose = require('mongoose');
let request = require('supertest')(app);
let connectionString =  'mongodb://localhost/store';

describe('#BooksRoutes', function() {

    beforeEach(function(done) {
        mongoose.connect(connectionString)
        .then(()=>{
            done();
        })
        .catch(err=>{
            throw err;
        })
    });

    it('#Books list',(done)=> {
        request
            .get('/book')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.be.a('array');
                done();
              });
    });

    it('#Books list filtered by title',(done)=> {
        request.get('/book/by-title/a')
        .end(function(err, res) { 
            expect(res.statusCode).to.equal(200); 
            expect(res.body).to.be.an('array').that.is.not.empty; 
            done(); 
          }); 
    });

    it('#Books list filtered by title no url value',(done)=> {
        request
            .get('/book/by-title/')
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(404); 
                expect(res.body).not.to.be.an('array'); 
                done(); 
              }); 
    });

    it('#Books list filtered by author', (done) =>{
        request.get('/book/by-author/a')
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('array').that.is.not.empty; 
                done(); 
             }); 
    });

    it('#Books list filtered by author no url value',(done)=> {
        request
            .get('/book/by-author/')
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(404); 
                expect(res.body).not.to.be.an('array'); 
                done(); 
              }); 
    });

    it('#Books create invalid', (done)=> {
        request
            .post('/book')
            .send({titulo: "", descricao: "novo livro"})
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(500); 
                expect(res.body).not.to.be.an('array'); 
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('errors') 
                done(); 
              }); 
    });

    it('#Books create valid', (done)=> {
        request.post('/book')
            .send({
                "book":{
                    "id": 0,
                    "title": "Culpa Enim Suscipit Voluptatem",
                    "user": "@cNewman",
                    "yearPublished": 2015,
                    "price": "$12.99",
                    "rating": "1.3/5"
                }
            })
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('object'); 
                done(); 
              });
    });
});

describe('#UsersRoutes', function() {

    beforeEach(function(done) {
        mongoose.connect(connectionString)
        .then(()=>{
            done();
        })
        .catch(err=>{
            throw err;
        })
    });

    it('#Users list',(done)=> {
        request
            .get('/user')
            .end(function(err, res) {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.be.a('array');
                expect(res.body).not.to.be.empty;
                done();
              });
    });

    it('#Users list filtered by name',(done)=> {
        request.get('/user/by-name/a')
        .end(function(err, res) { 
            expect(res.statusCode).to.equal(200); 
            expect(res.body).to.be.an('array').that.is.not.empty; 
            done(); 
          }); 
    });

    it('#Users list filtered by name no url value',(done)=> {
        request
            .get('/user/by-name/')
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(404); 
                expect(res.body).not.to.be.an('array'); 
                done(); 
              }); 
    });

    it('#Users create invalid', (done)=> {
        request
            .post('/user')
            .send({fullname: "", username: "new user"})
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(500); 
                expect(res.body).not.to.be.an('array'); 
                expect(res.body).to.be.an('object');
                expect(res.body).to.have.property('errors') 
                done(); 
              }); 
    });

    it('#Users create valid', (done)=> {
        request.post('/user')
            .send({
                "user":{
                    "fullName": "Test this will save in mongo sorry",
                    "gender": "male",
                    "age": 99,
                    "email": "test@yay.com",
                    "phone": "(360) 935-7443",
                    "username": "Test"
                }
            })
            .end(function(err, res) { 
                expect(res.statusCode).to.equal(200); 
                expect(res.body).to.be.an('object'); 
                done(); 
              });
    });
});
