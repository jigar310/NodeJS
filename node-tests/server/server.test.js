const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;
describe("Server", () => {
    describe("GET /", () => {
        it('should return 404 response', (done)=>{
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error:'Page not found.'
                    })
                })
                .end(done);
        });
    });
    describe("GET /users", () => {
        it('should return arrays response', (done)=>{
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name:'Jigar',
                        age:30
                    })
                })
                .end(done);
        });
    });
});