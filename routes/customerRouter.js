const express = require('express');
const bodyParser = require ('body-parser');

const customerRouter = express.Router();

customerRouter.use(bodyParser.json());

customerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('will send all the customers to you!');
})
.post((req, res, next) => {
    res.end('will add the customer: '+ req.body.name + 
    'with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /customers');
})
.delete((req, res, next) => {
    res.end('Deleting all the customers');
});

customerRouter.route('/:customerId')
.get((req, res, next) => {
    res.end('will send details of the customer: ' + req.params.customerId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /customers/' + req.params.customerId);
})
.put((req, res, next) => {
    res.write('Updating the customer: ' + req.params.customerId +'\n');
    res.end('Will update the customer: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete( (req, res, next) => {
    res.end('Deleting customer: ' + req.params.customerId);
});

module.exports = customerRouter;