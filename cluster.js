var cluster = require('cluster');
var http = require('http');

const worker_manager = function(app, port){
    if (cluster.isMaster) {
        var numWorkers = require('os').cpus().length;
        console.log('Worker manager setting up ' + numWorkers + ' workers...');
        for(var i = 0; i < numWorkers; i++) {
            cluster.fork();
           }
           cluster.on('online', function(worker) {
            console.log('Worker' + worker.process.pid + ' is online');
           });
           cluster.on('exit', function(worker, code, signal) {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
            cluster.fork();
           });
          cluster.on('disconnect', () => {
            clearTimeout(timeout);
          });
    } else {
            process.on('message', (msg) => {
                if (msg === 'shutdown') {
                // Initiate graceful close of any connections to server
                console.log("proccess shutdown");
                }
            });
            return app.listen(port, () => {
                console.log(`worker id:${process.pid} listening on port ${port}`);
            });
    }
}


module.exports = worker_manager;