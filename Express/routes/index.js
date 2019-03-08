var express = require('express');
var router = express.Router();

const webSocket = require('ws');
const Price = require('./data-schema');
const Trade = require('./data-schema');
const mongoose = require('mongoose');
var onChangeHandler;


// Connect to MongoDB
//mongoose.connect("mongodb://localhost/tradePriceDb?replicaSet=rs");
mongoose.connect("mongodb://localhost/tradeDb?replicaSet=rs");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error'));
/*
db.once('open', () => {
    const priceCollection = db.collection('prices');
    // Start watching on collection Prices
    const changeStream = priceCollection.watch();

    // When insert happens, print out the operation
    changeStream.on('change', (change) => {
        if (change.operationType === 'insert'){
            const price = change.fullDocument;
            console.log(price);
            onChangeHandler('BTCUSD', 'price', price.price);
        }
    });
});
*/

// open a WebSocket connection to BitFinex API
const wss_bitfinex_trade_usd = new webSocket('wss://api.bitfinex.com/ws/');
// message handler
wss_bitfinex_trade_usd.onmessage = (msg) => {
    let fields = msg.data.split(',');
    // pick out the price data
    if (fields[1] == '"tu"'){
        saveTrade(fields, "Bitfinex-USD");
    }
//    console.log(msg.data);
};
// Send the initial data for collecting trades
wss_bitfinex_trade_usd.onopen = () => {
    wss_bitfinex_trade_usd.send(JSON.stringify({
        "event": "subscribe",
        "channel": "trades",
        "pair": "BTCUSD"
    }));
};

const wss_bitfinex_trade_eur = new webSocket('wss://api.bitfinex.com/ws/');
// message handler
wss_bitfinex_trade_eur.onmessage = (msg) => {
    let fields = msg.data.split(',');
    // pick out the price data
    if (fields[1] == '"tu"'){
        saveTrade(fields, "Bitfinex-EUR");
    }
//    console.log(msg.data);
};
// Send the initial data for collecting trades
wss_bitfinex_trade_eur.onopen = () => {
    wss_bitfinex_trade_eur.send(JSON.stringify({
        "event": "subscribe",
        "channel": "trades",
        "pair": "BTCEUR"
    }));
};

const wss_bitfinex_trade_jpy = new webSocket('wss://api.bitfinex.com/ws/');
// message handler
wss_bitfinex_trade_jpy.onmessage = (msg) => {
    let fields = msg.data.split(',');
    // pick out the price data
    if (fields[1] == '"tu"'){
        saveTrade(fields, "Bitfinex-JPY");
    }
//    console.log(msg.data);
};
// Send the initial data for collecting trades
wss_bitfinex_trade_jpy.onopen = () => {
    wss_bitfinex_trade_jpy.send(JSON.stringify({
        "event": "subscribe",
        "channel": "trades",
        "pair": "BTCJPY"
    }));
};

const wss_coinbasepro_trade_usd = new webSocket('wss://ws-feed.pro.coinbase.com');
wss_coinbasepro_trade_usd.onopen = () => {
    wss_coinbasepro_trade_usd.send(JSON.stringify({
        "type": "subscribe",
        "channels": [{ "name": "matches", "product_ids": ["BTC-USD"] }]
    }));
};
wss_coinbasepro_trade_usd.onmessage = (msg) => {
//    console.log(msg.data);
    let fields = msg.data.split(',');
    if (fields[0] == '{"type":"match"'){
        saveTrade(fields, "Coinbasepro-USD");
    }
};

const wss_coinbasepro_trade_eur = new webSocket('wss://ws-feed.pro.coinbase.com');
wss_coinbasepro_trade_eur.onopen = () => {
    wss_coinbasepro_trade_eur.send(JSON.stringify({
        "type": "subscribe",
        "channels": [{ "name": "matches", "product_ids": ["BTC-EUR"] }]
    }));
};
wss_coinbasepro_trade_eur.onmessage = (msg) => {
//    console.log(msg.data);
    let fields = msg.data.split(',');
    if (fields[0] == '{"type":"match"'){
        saveTrade(fields, "Coinbasepro-EUR");
    }
};

const rpcWebSocket = require("rpc-websockets").Client;
const wss_bitflyer_trade_jpy = new rpcWebSocket('wss://ws.lightstream.bitflyer.com/json-rpc');
wss_bitflyer_trade_jpy.on("open", () => {
    wss_bitflyer_trade_jpy.call("subscribe", {
        channel: "lightning_executions_BTC_JPY"
    });
});
wss_bitflyer_trade_jpy.on("channelMessage", notify => {
    let fields = notify.message[0];
    saveTrade(fields, "bitflyer-JPY");
//    console.log(fields);
});


function saveTrade(fields, code){
    let hour, minute, second, price, amount;
    if ((code == "Bitfinex-USD") || (code == "Bitfinex-EUR") || (code == "Bitfinex-JPY")){
        hour = parseInt(fields[4]/3600)*3600000;
        minute = parseInt(fields[4]%3600/60);
        second = fields[4]%3600%60;
        price = fields[5];
        amount = fields[6].slice(0,-1);
//        console.log("Bitfinex"+hour+", "+minute+", "+second);
    }
    if ((code == "Coinbasepro-USD") || (code == "Coinbasepro-EUR")){
        let timestamp = new Date(fields[9].slice(8,-2));
        let time = Math.round(timestamp.getTime()/1000);
        hour = parseInt(time/3600)*3600000;
        minute = parseInt(time%3600/60);
        second = time%3600%60;
        price = fields[6].split(':')[1].slice(1, -1);
        if (fields[4].split(':')[1] == '"sell"'){
            amount = "-" + fields[5].split(':')[1].slice(1,-1);
        } else {
            amount = fields[5].split(':')[1].slice(1,-1);
        }
//        console.log("Coinbase"+hour+", "+minute+", "+second);
    }
    if (code == "bitflyer-JPY"){
        let timestamp = new Date(fields.exec_date);
        let time = Math.round(timestamp.getTime()/1000);
        hour = parseInt(time/3600)*3600000;
        minute = parseInt(time%3600/60);
        second = time%3600%60;
        price = fields.price;
        if (fields.side == "SELL"){
            amount = "-" + fields.size;
        } else {
            amount = fields.size;
        }
//        console.log("Coinbase"+hour+", "+minute+", "+second);
    }

    let abs_amount = Math.abs(amount);
    let pricepath = "Values."+minute+"."+second+".price";
    let amountpath = "Values."+minute+"."+second+".amount";
//        console.log(hour+", "+minute+", "+second);

    onChangeHandler(code, 'price', price);

    Trade.findOne(
        {
            Timestamp_hour: hour,
            Code: code
//                Open_price: {$exist: false}
        }, 'Open_price Close_price Highest_price Lowest_price Total_Volume', (err, doc) => {
            let query = {$set: {}};
            query.$set[pricepath] = price;
            query.$set[amountpath] = amount;
            query.$set["Close_price"] = price;
            if (doc === null){
                query.$set["Open_price"] = price;
                query.$set["Highest_price"] = price;
                query.$set["Lowest_price"] = price;
                query.$set["Total_Volume"] = abs_amount;
            } else {
                if (doc.Highest_price < price){
                    query.$set["Highest_price"] = price;
                }
                if (doc.Lowest_price > price){
                    query.$set["Lowest_price"] = price;
                }
                query.$inc = {"Total_Volume": abs_amount};
            }

            Trade.update(
                {
                    Timestamp_hour: hour,
                    Code: code
                },
                query,
                {
                    upsert: true
                },(err, price) => {
                    if (err) {
                        console.log('Create Error' + err);
                    }
                }
            );
        }
    );
}

// Establish a socket.io server
/*
io.on('connection', function(socket){
    console.log('User connected. Socket id %s', socket.id);

    socket.on('join', function (rooms) {
        console.log('Socket %s joined %s', socket.id, rooms);
        if (Array.isArray(rooms)){
            rooms.forEach(function (room) {
                socket.join(room);
            });
        } else {
            socket.join(rooms);
        }
    });

    socket.on('disconnect', function () {
        console.log('User disconnected. %s. Socket id %s', socket.id);
    });
});
*/
function change(onChange) {
    onChangeHandler = onChange;
}


/* GET home page. */
router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
    Trade.find({} , '-_id Timestamp_hour Code Open_price Close_price Highest_price Lowest_price', (err, doc) => {
        res.json(doc);
    })
});

router.get('/api/bitfinex-usd-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "Bitfinex-USD"}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
            _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
        }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/bitfinex-jpy-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "Bitfinex-JPY"}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/bitfinex-eur-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "Bitfinex-EUR"}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/coinbase-usd-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "Coinbasepro-USD"}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/coinbase-eur-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "Coinbasepro-EUR"}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/bitflyer-jpy-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "bitflyer-JPY"}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/all-usd-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-USD"}, {Code: "Bitfinex-USD"}]}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/all-eur-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-EUR"}, {Code: "Bitfinex-EUR"}]}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/all-jpy-day', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "bitflyer-JPY"}, {Code: "Bitfinex-JPY"}]}},
        {$project: {_id: 0, Timestamp_hour: 1, Open_price: 1, Close_price: 1, Highest_price: 1, Lowest_price:1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                Open_price: {$first: "$Open_price"},
                Close_price: {$last: "$Close_price"},
                Highest_price: {$max: "$Highest_price"},
                Lowest_price: {$min: "$Lowest_price"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/all-usd-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-USD"}, {Code: "Bitfinex-USD"}]}},
        {$project: {_id: 0, Timestamp_hour: 1, Total_Volume: 1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                total: {$sum: "$Total_Volume"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/all-eur-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-EUR"}, {Code: "Bitfinex-EUR"}]}},
        {$project: {_id: 0, Timestamp_hour: 1, Total_Volume: 1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                total: {$sum: "$Total_Volume"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/all-jpy-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "bitflyer-JPY"}, {Code: "Bitfinex-JPY"}]}},
        {$project: {_id: 0, Timestamp_hour: 1, Total_Volume: 1 }},
        {$group:{
                _id: {month: {$month: "$Timestamp_hour"}, day: {$dayOfMonth: "$Timestamp_hour"}, year: {$year: "$Timestamp_hour"}},
                total: {$sum: "$Total_Volume"}
            }},
        {$sort: {"_id.year": 1, "_id.month": 1, "_id.day": 1}}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/usd-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-USD"}, {Code: "Bitfinex-USD"}]}},
        {$project: {_id: 0, Total_Volume: 1 }},
        {$group:{
                _id: "$Code",
                total: {$sum: "$Total_Volume"}
            }}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/eur-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-EUR"}, {Code: "Bitfinex-EUR"}]}},
        {$project: {_id: 0, Total_Volume: 1 }},
        {$group:{
                _id: "$Code",
                total: {$sum: "$Total_Volume"}
            }}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/jpy-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "bitflyer-JPY"}, {Code: "Bitfinex-JPY"}]}},
        {$project: {_id: 0, Total_Volume: 1 }},
        {$group:{
                _id: "$Code",
                total: {$sum: "$Total_Volume"}
            }}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/bitfinex-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Bitfinex-USD"}, {Code: "Bitfinex-JPY"}, {Code: "Bitfinex-EUR"}]}},
        {$project: {_id: 0, Total_Volume: 1 }},
        {$group:{
                _id: "$Code",
                total: {$sum: "$Total_Volume"}
            }}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/coinbase-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {$or: [{Code: "Coinbasepro-USD"}, {Code: "Coinbasepro-EUR"}]}},
        {$project: {_id: 0, Total_Volume: 1 }},
        {$group:{
                _id: "$Code",
                total: {$sum: "$Total_Volume"}
            }}
    ]).then(function(doc) {
        res.json(doc);
    });
});

router.get('/api/bitflyer-volume', function (req, res, next) {
    Trade.aggregate([
        {$match: {Code: "bitflyer-JPY"}},
        {$project: {_id: 0, Total_Volume: 1 }},
        {$group:{
                _id: "$Code",
                total: {$sum: "$Total_Volume"}
            }}
    ]).then(function(doc) {
        res.json(doc);
    });
});

module.exports = router;
module.exports.change = change;
