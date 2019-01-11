let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');
let url = require('url');

let app=express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', function(request, response){
	response.send('<h1> Whatevs </h1> ');
})
app.get('/hello', function(request, response){
	response.sendFile(path.join(__dirname+ '/Page1.html'));
});
app.get('/register', function(request, response){
	response.send(`<form method='get' action='/output'>
	First name: <input type='text' name='fname' /> <br><br>
	Last name: <input type='text' name='lname' /> <br><br>
	<input type='submit'/></form>`)
});
/*app.use('/output', express.static('public') || ); */
/*app.param('fname', 'lname', function(request, response, next, fname, lname){
	request.fname = fname;
	request.lname = lname;
})*/


app.get('/output', function(request, response, next){
	console.log('in func')
	let q=url.parse(request.url,true).query;
	console.log("guggyfft");
	console.log('fname: ', q.fname);
	console.log('lname: ', q.lname);
	response.send(q.fname +'  '+ q.lname);
});

app.listen(8080);
