/*
 * George Sidamon-Eristoff 
 * 23 April 2020
 * Tufts Comp20 Spring 2020
 * Homework 13 - Node.js and MongoDB
 */


const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const url = "mongodb+srv://gsidam01:shoutout@cluster0-hzbvs.mongodb.net/test?retryWrites=true&w=majority";

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}

const file_from_cmd_line = process.argv[2]; 

fs.readFile(file_from_cmd_line, function(err, data) {
    if (err) {
        console.log(err);
    }
    var data_arr = data.toString().split(/,|\n/);
    for(let i = 2; i < data_arr.length -1; i = i+2) {
        log_data(data_arr[i], data_arr[i+1]);
    }
});
console.log("Success!");


async function log_data(comp, tick)
{
    await MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if(err) {
            console.log ("Error: " + err);
            return;
        }
        var dbo = db.db("companies");
        var collection = dbo.collection('companies');
        var newData = {Company: comp, Ticker: tick};
        collection.insertOne(newData, function(err, res) {
            if (err) {
                console.log ("Error: " + err);
                return;
            }
            db.close();
        });
    });
}
