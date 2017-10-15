const express = require('express');
const router = express.Router();
const pet = require('../models/petModels')

router.get('/', (req, res) => {
	pet.find((err, pet) => {
		if(err) {
			res.send('there was an error in the database')
		}else{
	res.render('index', {pet: pet})
		}
	})
})



router.get('/:index/edit', (req, res) => {

  pet.findById(req.params.index, (err, pet) => {
    if(err) {
      res.send('error updating')
    } else {
       res.render('edit', {
                      pet: pet
                      })
    }
  })// end of model query
});


router.get('/create', (req, res) => {
	res.render('create', {})
})

router.get('/:index', (req, res) => {
  console.log('hitting')
  pet.findById(req.params.index, (err, pet)=> {
    res.render('show', {pet: pet})
  })


})


router.post('/create', (req, res) => {
  console.log(req.body)

  if(req.body.goodPet === 'on'){
    req.body.goodPet = true;
  } else {
    req.body.goodPet = false;
  }

  pet.create(req.body, (err, pet) => {
    if(err){
      res.send('there was an error create the fruit')
    } else {
      console.log(pet);
      res.redirect('/pet')
    }
  })
})

router.put('/:index/edit', (req, res) => {
  	console.log(req.body)
  if(req.body.goodPet === 'on'){
    req.body.goodPet = true;
  } else {
    req.body.goodPet = false;
  }
    pet.findByIdAndUpdate(req.params.index, req.body, (err, pet) => {
    if(err) {
      res.send('there was an error updating')
    } else {
      res.redirect('/pet')
    }
  })



})


router.delete('/:index', (req, res) => {
  console.log('hitting the deleter route')
  console.log(req.params.index)

	pet.findByIdAndRemove(req.params.index, (err, pet) => {
    if(err) {
      res.send('there was an error')
    } else {
      res.redirect('/pet')
    }
  })
})












module.exports = router;