"use strict";
// CODE
var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
request({
    url: 'https://api.dev.ooki.io/public-cms/Articles', json: true
}, function (error, response, object) {
    var categorylist = [];
    var authorslist = [];
    var publishedDate = [];
    var articleTitle = [];
    var readTime = [];
    app.get('/parse', function (re, res) {
        for (var i = 0; i < 5; i++) {
            categorylist.push(object['data'].map(function (object) { return object.data.category.iv; })[i]);
            authorslist.push(object["data"].map(function (object) { return object.data.author.iv; })[i]);
            publishedDate.push(object["data"].map(function (object) { return object.data.publishedDate.iv; })[i]);
            articleTitle.push(object['data'].map(function (object) { return object.data.articleTitle.iv; })[i]);
            readTime.push(object['data'].map(function (object) { return object.data.readTime.iv; })[i]);
        }
        res.send({
            "ArticleTitle": articleTitle,
            "Author": authorslist,
            "Category": categorylist,
            "PublishedDate": publishedDate,
            "ReadTime": readTime
        });
    });
});
app.listen(4000, function () {
    console.log('Parsing');
});
