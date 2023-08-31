const express = require('express')
const router = express.Router()
const { authentication, authorization, authorizationForStatus } = require('../middlewares/middlewares')
const TourController = require('../controllers/TourController')


// router.post('/', TourController.createTour)
router.get('/', TourController.findAllTour)
router.get('/:id', TourController.findTourById)
// router.delete('/:id', TourController.deleteTour)
// router.put('/:id', TourController.updateTour)
// router.delete('/:id', authorization, TourController.deleteProduct)
// router.put('/:id', authorization, TourController.updateProduct)
// router.patch('/:id', authorization, authorizationForStatus, ProductController.modifyStatus)

module.exports = router