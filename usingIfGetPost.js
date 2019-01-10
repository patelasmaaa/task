let http = require('http');
let url = require('url');

let handleRequest = (req, response) => {

if(req.method == 'GET' && req.url=='/'){
	response.write("<form name='index' method='post' action='#'><input type='submit' value='welcome'/></form>")
}

if(req.method == 'POST'){
	response.write(`<form name='page' method='get' action='/reg'>
	Name: <input type='text' name='fname' />
	Mobile: <input type='text' name='fmobile' /> 
	<input type='submit'/></form>`);
}

if(req.method == 'GET' && req.url.indexOf('reg') > -1){
	let q=url.parse(req.url,true).query;
	response.write(q.fname);
	response.write(q.fmobile);
	//console.log(q.fname);
}
return response.end();
};

http.createServer(handleRequest).listen(4011);