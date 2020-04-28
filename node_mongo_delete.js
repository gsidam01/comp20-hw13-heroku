/*
 * George Sidamon-Eristoff 
 * 23 April 2020
 * Tufts Comp20 Spring 2020
 * Homework 13 - Node.js and MongoDB
 */


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://gsidam01:shoutout@cluster0-hzbvs.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
	if(err) {
		return console.log(err);
	}
	var dbo = db.db("companies");
	var collection = dbo.collection('companies');
	var theQuery = { Ticker: /A|S|G|T/ };

	collection.deleteMany(theQuery, function(err, obj) {
	    if (err) {
	    	throw err;
	    }
	    console.log("document(s) deleted");
		db.close();
	    });
});
