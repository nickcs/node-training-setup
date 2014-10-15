var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

function loadData(callback) {

  client.on("error", function (err) {
    callback(err);
  });

  client.set("string key", "string val");
  client.hset("hash key", "hashtest 1", "some value");
  client.hset(["hash key", "hashtest 2", "some other value"], function(err,res){});
  callback();
}

function getData(callback) {
  client.on("error", function (err) {
    callback(err);
  });

  client.hkeys("hash key", callback);
}

function quit() {
  client.quit();
}

module.exports.loadData = loadData;
module.exports.getData = getData;
module.exports.quit = quit;
