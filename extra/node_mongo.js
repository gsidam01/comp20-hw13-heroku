const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://gsidam01:shoutout@cluster0-hzbvs.mongodb.net/test?retryWrites=true&w=majority";
	MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
	if(err) {
		return console.log(err);
	}
	var dbo = db.db("companies");
	var collection = dbo.collection('companies');
	console.log("Success!");
	db.close();
});


