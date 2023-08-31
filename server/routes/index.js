const express = require('express')
const UserController = require('../controllers/UserControllers')
const router = express.Router()
const tourRouter = require('./TourRouter')
const { userAuthenctication, userAuthorization } = require('../middlewares/middlewares')
const BookingController = require('../controllers/BookingController')

// TODO user routes
router.post('/users/register', UserController.register)
router.post('/users/login', UserController.login)
router.post('/users/google-sign-in', UserController.signInGoogle)

// TODO tour routes
router.use('/tours', tourRouter)

// TODO booking routes
router.use(userAuthenctication)
router.post('/generate-midtrans-token', BookingController.generateToken)
router.get('/bookings', BookingController.getAllBookings)
router.post('/bookings/:tourId', userAuthorization, BookingController.createBooking)

module.exports = router