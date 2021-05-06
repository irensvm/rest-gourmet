const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Restaurant = require('../models/rest-model')
router.post('/restaurants', (req, res, next) => {
    // req.body
    Restaurant.create({
      restName: req.body.restName,
      instagram: req.body.description,
      type: req.body.type,
      instagram: req.body.instagram
    })
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      res.json(err)
    })
  }) 



  router.get('/restaurants', (req, res, next) => {
    // recoger TODOS los proyectos, y devolver como JSON
    // TO-DO: popular con las tasks
    Restaurant.find()
    .populate('restaurants')
    .then(restaurants => {
      res.json(restaurants)
    })
    .catch(err => {
      res.json(err)
    })
  
  })


  router.get('/restaurants/:id', (req, res, next) => {
    console.log(req.params.id)
    Project.findById(req.params.id)
    .populate('restaurants')
    .then(restaurants => {
      res.json(restaurants)
    })
    .catch(err => {
      res.json(err)
    })
    
  })

  router.delete('/restaurants/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
  
    Project.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json({ message: `Restaurant with ${req.params.id} is removed successfully.` });
      })
      .catch(error => {
        res.json(error);
      });
  });
  
  
  module.exports = router