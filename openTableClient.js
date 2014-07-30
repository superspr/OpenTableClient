var querystring = require('querystring');
var Client = require('node-rest-client').Client;
client = new Client();
var OpenTable = function() {
  this.base_url = "http://opentable.herokuapp.com/";
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

/*
Exampe:
yelp.search({term: "food", location: "Montreal"}, function(error, data) {});
*/
OpenTable.prototype.search = function(params, callback) {
  return this.get('search', params, callback);
}
OpenTable.prototype.getStats = function(callback) {
	return this.get('api/stats', null, callback);
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