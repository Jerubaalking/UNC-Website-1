var cluster = require("cluster");
const { application } = require("express");
var http = require("http");
var numCpus = 4;
const worker_manager = function(app = typeof application, port) {
    if (cluster.isMaster) {
        for (var i = 0; i < numCpus; i++) {
            cluster.fork();

        }
    } else {
        return http.createServer(app).listen(port, () => {
            console.log("worker id: ", process.pid, "listening at port: ", port);
        });
    }
};

module.exports = worker_manager;