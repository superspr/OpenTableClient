var querystring = require('querystring');
var Client = require('node-rest-client').Client;
var client = new Client();
var OpenTable = function() {
  this.base_url = "http://opentable.herokuapp.com/api";
  //return this;
};

//var base_url = "http://opentable.herokuapp.com/";

OpenTable.prototype.get = function(resource, params, callback) {
    if (!params) {
		client.get(this.base_url+resource, function(data, res){
			callback(data, params, res);});
	} else {
		client.get(this.base_url+resource, function(data, res){
			callback(data, res);});
	}
}

OpenTable.prototype.getCities = function(callback) {
	return this.get('/cities', null, callback);
}
OpenTable.prototype.getStats = function(callback) {
	return this.get('/stats', null, callback);
}
OpenTable.prototype.getRestaurant = function(param, callback) {
	return this.get('/restaurants/' + param, null, callback);
}


/*
Example:
yelp.business("yelp-san-francisco", function(error, data) {});
*/
OpenTable.prototype.business = function(id, callback) {
  return this.get('business/' + id, null, callback);
}

// @see http://www.yelp.com/developers/documentation/v2/authentication
/*module.exports.createClient = function() {
  return new OpenTable();
};*/
module.exports = OpenTable;