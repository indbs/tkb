import { createServer } 																from 'http';

createServer(function (req, res) {
	
	var connection = createCon();
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, access-control-allow-origin");

	makeCon(req, res, connection);

}).listen(8071);