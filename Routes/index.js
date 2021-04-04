"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const ContactModel = require("../Models/contact");
const Contact = ContactModel.Model;
exports.router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
exports.router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
exports.router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
});
exports.router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: '' });
});
exports.router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: '' });
});
exports.router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
});
exports.router.get('/login', function (req, res, next) {
    res.render('index', { title: 'Login', page: 'login', displayName: '' });
});
exports.router.post('/login', function (req, res, next) {
    res.render('index', { title: 'Contact List', page: 'contact-list', displayName: req.body.username });
});
exports.router.get('/register', function (req, res, next) {
    res.render('index', { title: 'Register', page: 'register', displayName: '' });
});
exports.router.get('/contact-list', function (req, res, next) {
    Contact.find(function (err, contacts) {
        if (err) {
            return console.error(err);
        }
        console.log(contacts);
        res.json(contacts);
    });
});
exports.router.get('/logout', function (req, res, next) {
    res.render('index', { title: 'Logout', page: 'logout', displayName: '' });
});
//# sourceMappingURL=index.js.map