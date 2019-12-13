var http = require('http');
var pkg = require("./package.json");

"use strict";
function httpsWorker(glx) {
    var app = require("./app");

    app.get("/hello", function(req, res) {
        res.end("Hello, Encrypted World!");
    });

    // Serves on 80 and 443
    // Get's SSL certificates magically!
    glx.serveApp(app);
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