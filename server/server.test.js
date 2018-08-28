const request=require('supertest');
const expect=require('expect');


let app=require('./server').app;


describe('Servers',()=>{
	describe('GET /',()=>{
	it('should return hello world response',(done)=>{
	request(app)
	.get('/')
	.expect(200)
	.expect('Hello World')
	.end(done);
});
	});
	describe('GET /users',()=>{
	it('should return my user object',(done)=>{
	request(app)
	.get('/users')
	.expect(200)
	.expect((res)=>{
	expect(res.body).toInclude({
		name: 'Mukul',
		age: 20
	});
	})
	.end(done);
});
	});
});



