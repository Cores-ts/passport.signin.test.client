const express = require('express')
const app = express()
const cfg = require('./config')
const ClientOAuth2 = require('client-oauth2')
const client = new ClientOAuth2(cfg.client);
const util = require('util');
const axios = require('axios').default;
let cachedToken = {}

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    cachedToken = {}
    res.render('index', { cfg: cfg });
})

app.get(cfg.paths.authFlowStart, function (req, res) {
    console.log(cfg.paths.authFlowStart)
    var uri = client.code.getUri()
    res.redirect(uri)
})

app.get(cfg.paths.authFlowCallback, function (req, res) {
    console.log(cfg.paths.authFlowCallback, req.originalUrl)
    client.code.getToken(req.originalUrl)
        .then(function (user) {
            console.log(user)
            cachedToken = user
            return res.render('token', {
                user: util.inspect(user),
                cfg: cfg
            });
        })
        .catch(function (error) {
            console.log(error)
            return res.render('error', { error: error });
        })
})

app.get(cfg.paths.resourceData, function (req, res) {
    console.log(cfg.paths.resourceData, req.originalUrl)

    axios.request(cachedToken.sign({
            method: 'get',
            url: cfg.client.getResourceUri
        }))
        .then(function (response) {
            // handle success
            console.log(response);
             return res.render('user', {
                 user: util.inspect(response.data),
                 cfg: cfg
             });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    
})
app.get(cfg.paths.resourceJobProfileData, function (req, res) {
    console.log(cfg.paths.resourceJobProfileData, req.originalUrl)

    axios.request(cachedToken.sign({
            method: 'get',
            url: cfg.client.getResourceJobProfileUri
        }))
        .then(function (response) {
            // handle success
            console.log(response);
            return res.render('user', {
                user: util.inspect(response.data),
                cfg: cfg
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

})

app.listen(cfg.port, function () {
    'use strict';
    console.log('\n');
    console.log('+--------------------------');
    console.log(' PID %d', process.pid);
    console.log(' Listening on port', cfg.port);
    console.log('+--------------------------');
});