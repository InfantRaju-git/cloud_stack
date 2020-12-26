const express = require("express");
const request = require('request');
const router = express.Router();

const auth = require("../../middlewares/auth.js");

module.exports.controller = function(app) {
  
  app.get("/browse", auth.checkLogin, function(req, res) {

  request("http://api.duckduckgo.com/?q=apple&pageSize=10&format=json&pretty=1", function(err, response,body){
    if(err){console.log(err);}
    if(! err && response.statusCode == 200) {
          var data = JSON.parse(body);
          console.log(data);
          res.render("browse", {
            title:"Browse",
            data: data,
            user: req.session.user,
            chat: req.session.chat
          });
      }
  });


  });

  app.use(router);
}; 
