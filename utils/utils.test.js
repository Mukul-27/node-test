const expect=require('expect');

const utils=require('./utils.js');

describe('Utils',()=>{
describe('#add',()=>{
it('should add two numbers',()=>{
let res = utils.add(33,11);

expect(res).toBe(44).toBeA('number');
/* if(res!==44){
	throw new ERROR(`Expected 44, but got ${res}`);
}*/
});

it('should async add two numbers',(done)=>{
utils.asyncAdd(4,3,(sum)=>{
expect(sum).toBe(7).toBeA('number');
done();
});
});
})


it('should square a number',()=>{
let res=utils.square(3);

expect(res).toBe(9).toBeA('number');
/*if(res!==9){
throw  new ERROR(`Extected 9, but got ${res}`);
}*/
});

it('should async square a number',(done)=>{
utils.asyncSquare(3,(square)=>{
expect(square).toBe(9).toBeA('number');
done();
});
});

it('should expect some values',()=>{
	//expect(12).toNotBe(11);
	//expect({name: 'Mukul'}).toEqual({name: 'Mukul'});
	//expect([2,3,4]).toInclude(4);
	expect({
		name: 'Mukul',
		age: 20,
		location: 'Delhi' 
	}).toInclude({name: 'Mukul'});
});

it('should split the name',()=>{
let user={
	age: 20,
	location: 'Delhi'
};

let res=utils.setName(user,'Mukul Bansal');

expect(user).toInclude({
	firstName: 'Mukul',
	lastName: 'Bansal'
	});
});
});

