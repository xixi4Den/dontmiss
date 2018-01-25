
var cron = require('node-cron');

var config = require('./config');

var parser = require('./parser');
var notifier = require('./notifier');

console.log("Starting...");

console.log(process.env.NODE_ENV);

console.log(config.cron.parser);
console.log(config.cron.notifier);

console.log(parser.parse());
console.log(notifier.notify());
 
cron.schedule('* * * * * *', function(){
  console.log('task performing...');
});

console.log("Have been finished.");