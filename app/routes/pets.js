'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var pets = global.nss.db.collection('pets');

  pets.find().toArray((err, records)=>{
    res.render('pets/index', {pets: records, bg: 'pets.jpg', title: 'Pet Factory: Pets'});
  });

};

exports.show = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findOne({_id:_id}, (err, record)=>{
    res.render('pets/show', {pet: record, bg: 'pets.jpg', title: 'Pet Factory: Pets'});
  });
};

exports.new = (req, res)=>{
    res.render('pets/new', {bg: 'pets.jpg', title: 'Pet Factory: New'});
};

exports.create = (req, res)=>{
  var photo;
  switch(req.body.species){
  case 'Dog':
    photo = 'dog.png';
    break;
  case 'Cat':
    photo = 'cat.gif';
    break;
  case 'Bunny':
    photo = 'bunny.png';
  }

  req.body.photo = photo;
  var pets = global.nss.db.collection('pets');
  pets.save(req.body, (err, obj)=>{
    res.redirect(`/pets/${obj._id}`);
  });
};

exports.destroy = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/pets');
  });
};
