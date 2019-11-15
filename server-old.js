const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

router.get('/about', function (req, res) {
    res.send('im the about page!');
});


// route middleware to validate :name
router.param('name', function (req, res, next, name) {
    // do validation on name here
    // blah blah validation
    // log something so we know its working
    console.log('doing name validations on ' + name);

    // once validation is done save the new item in the req
    req.name = name;
    // go to the next thing
    next();
});

router.get('/hello/:name', function (req, res) {
    res.send('hello ' + req.params.name + '!');
});

// app route

app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function (req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function (req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

app.route('/test')
    .get(function (req, res) {
        /* req.work = 'Test Works' */
        res.send({ msg: 'Test Works' });
    })

app.use('/', router);

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));