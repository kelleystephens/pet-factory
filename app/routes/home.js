'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg: 'factory.jpg', title: 'Welcome to the Pet Factory'});
};

exports.about = (req, res)=>{
  res.render('home/about', {bg: 'about.jpg', title: 'Pet Factory: About'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {bg: 'contact.jpg', title: 'Pet Factory: Contact'});
};
