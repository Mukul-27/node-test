const express = require('express');

let app=express();

app.get('/',(req,res)=>{
res.status(200).send('Hello World');
});

app.get('/users',(req,res)=>{
	res.send([{
		name: 'Mukul',
		age: 20
	},{
	name: 'abc',
	age: 21
	},{
		name:'cdf',
		age:22
	}]);
});

app.listen(3000);

module.exports.app=app;