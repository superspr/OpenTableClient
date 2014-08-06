var express = require('express');
 
var app = express();
var ot = require('./openTableClient');
var openTable = new ot();

app.get('/stats', function(req, res) {
	openTable.getStats(function(data,res){
		console.log(data);
		console.log(res);});
});

app.get('/cities', function(req, res) {
	openTable.getCities(function(data,res){
		console.log(data);
		console.log(res);});
});
app.get('/restaurant/:id', function(req, res) {
	openTable.getRestaurant(req.params.id, function(data,res){
		console.log(data);
		console.log(res);});
});


app.listen(3000);
console.log('Listening on port 3000...');