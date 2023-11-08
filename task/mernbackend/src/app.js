const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();
const port = process.env.PORT || 3001;
require('./db/connect')

const Register = require('./models/register');
const Contact = require('./models/contact');
const Login = require('./models/login');

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");

app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/login', async (req, res) => {
    try {
        const log = new Login({
            email: req.body.email,
            password: req.body.password
        })
        const loggedIn = await log.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(400).send(error);
    }
})
app.post('/contact', async (req, res) => {
    try {
        const cont = new Contact({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            query: req.body.query
        })
        const contacted = await cont.save();
        res.status(201).render('index');
    } catch (error) {
        res.status(400).send(error)
    }
})
app.post('/register', async (req, res) => {
    try {
        const reg = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        })

        const registered = await reg.save();
        res.status(201).render('index');

    } catch (err) {
        res.status(400).send(err)
    }
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})