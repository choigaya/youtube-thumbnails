var http = require('http');
var pkg = require("./package.json");

"use strict";


function httpsWorker(glx) {
    //
    // HTTPS 1.1 is the default
    // (HTTP2 would be the default but... https://github.com/expressjs/express/issues/3388)
    //

    // Get the raw https server:
    var httpsServer = glx.httpsServer(null, function(req, res) {
        res.end("Hello, Encrypted World!");
    });

    httpsServer.listen(443, "0.0.0.0", function() {
        console.info("Listening on ", httpsServer.address());
    });

    // Note:
    // You must ALSO listen on port 80 for ACME HTTP-01 Challenges
    // (the ACME and http->https middleware are loaded by glx.httpServer)
    var httpServer = glx.httpServer();
    httpServer.listen(80, "0.0.0.0", function() {
        console.info("Listening on ", httpServer.address());
    });
}


//require("greenlock-express")
require("greenlock-express")
    .init(function getConfig() {
        // Greenlock Config

        return {
            // Package name+version is used for ACME client user agent
            package: { name: pkg.name, version: pkg.version },

            // Maintainer email is the contact for critical bug and security notices
            maintainerEmail: "woosung827@naver.com",

            packageRoot: __dirname,

            // Change to true when you're ready to make your app cloud-scale
            cluster: false
        };
    })
    .serve(httpsWorker);
/* server.listen(5300);     */