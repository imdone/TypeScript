//// [parser509534.ts]
"use strict";
var config = require("../config");
module.exports.route = function (server) {
 
 // General Login Page
 server.get(config.env.siteRoot + "/auth/login", function (req, res, next) {
  
  // TODO Should render login page that shows auth options id:401 gh:402
  req.redirect("/auth/live");
 });
}


//// [parser509534.js]
"use strict";
var config = require("../config");
module.exports.route = function (server) {
    // General Login Page
    server.get(config.env.siteRoot + "/auth/login", function (req, res, next) {
        // TODO Should render login page that shows auth options id:745 gh:746
        req.redirect("/auth/live");
    });
};
