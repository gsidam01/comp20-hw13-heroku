/*
 * George Sidamon-Eristoff 
 * 23 April 2020
 * Tufts Comp20 Spring 2020
 * Homework 13 - Node.js and MongoDB
 */

/* Global Variables */
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const my_express = express();
const url = "mongodb+srv://gsidam01:shoutout@cluster0-hzbvs.mongodb.net/test?retryWrites=true&w=majority";
var my_db = null;
var my_collection = null;

/* Executed Code */
set_up();
my_express.use(express.static('public'));
my_express.get('/t/:query', find_by_tick);
my_express.get('/c/:query', find_by_comp);

/* Functions */
async function set_up()
{   
    await MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
        if (err) {
            console.log ("DB Error: " + err);
            return;
        }
        my_db = db.db("companies");
        my_collection = my_db.collection("companies");
    });
    await my_express.listen(8000, function(){
        console.log('Listening in port 8000!');
    });
}

async function find_by_tick(req, res)
{
    const db_ret = await my_collection.findOne({Ticker:req.params.query});
    if (db_ret == null) {
        res.json({Company:"Ticker not found."});
    } else {
        res.json({Company:db_ret.Company});
    }
}

async function find_by_comp(req, res)
{
    const db_ret = await my_collection.findOne({Company:req.params.query});
    if (db_ret == null) {
        res.json({Ticker:"Company not found."});
    } else {
        res.json({Ticker:db_ret.Ticker});
    }
}