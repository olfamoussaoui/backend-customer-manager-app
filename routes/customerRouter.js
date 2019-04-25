const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

const cors = require('./cors');

const Customers = require('../models/customers');
const customerRouter = express.Router();

customerRouter.use(bodyParser.json());

customerRouter.route('/')

.get((req,res,next) => {
    Customers.find({})
    .then((customers) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customers);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Customers.create(req.body)
    .then((customer) => {
        console.log('customer Created ', customer);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customer);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /customers');
})
.delete((req, res, next) => {
    Customers.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

customerRouter.route('/:customerId')
.get((req,res,next) => {
    Customers.findById(req.params.customerId)
    .then((customer) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customer);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /customers/'+ req.params.customerId);
})
.put((req, res, next) => {
    Customers.findByIdAndUpdate(req.params.customerId, {
        $set: req.body
    }, { new: true })
    .then((customer) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(customer);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Customers.findByIdAndRemove(req.params.customerId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = customerRouter;