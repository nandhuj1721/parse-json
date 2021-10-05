

// CODE


const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

request({
    url: 'https://api.dev.ooki.io/public-cms/Articles', json: true}, (error: any, response:any, object: any) =>

     {
        let categorylist: any[] = [];
        let authorslist: any[] = [];
        let publishedDate: any[] = [];
        let articleTitle: any[] = [];
        let readTime: any[]=[];
  
    app.get('/parse', (re: any, res: any) => {
            for (let i = 0; i < 5; i++) {
                categorylist.push(object['data'].map((object: { data: { category: { iv: any; }; }; }) => object.data.category.iv)[i]);
                authorslist.push(object["data"].map((object: { data: { author: { iv: any; }; }; }) => object.data.author.iv)[i]);
                publishedDate.push(object["data"].map((object: { data: { publishedDate: { iv: any; }; }; }) => object.data.publishedDate.iv)[i]);
                articleTitle.push(object['data'].map((object: { data: { articleTitle: { iv: any; }; }; }) => object.data.articleTitle.iv)[i]);
                readTime.push(object['data'].map((object: { data: { readTime: { iv: any; }; }; }) => object.data.readTime.iv)[i]);
            }
            res.send({
                "ArticleTitle": articleTitle,
                "Author": authorslist,
                "Category": categorylist,
                "PublishedDate":publishedDate,
                "ReadTime":readTime
            });

    });
});

app.listen(4000, function() {
    console.log('Parsing');
});