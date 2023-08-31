const { Booking, Tour, User } = require('../models')
const midtransClient = require('midtrans-client');

class BookingController {
    // TODO find All Bookings based on Logged in user
    static async getAllBookings(req, res, next) {
        // console.log(req.customer.id, '<<<<<<<<< customer ID');
        // console.log(req.params.productId, '<<<<<<<<<<< product ID');
        try {
            const bookings = await Booking.findAll({
                include: {
                    model: Tour,
                    attributes: { exclude: ['createdAt', 'updatedAt'] }
                },
                where: {
                    UserId: req.user.id
                },
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })
            res.status(200).json({ bookings })
        } catch (error) {
            next(error)
        }
    }

    // TODO add booking based on Logged in user
    static async createBooking(req, res, next) {
        // console.log(req.customer.id, '<<<<<<<<< customer ID');
        // console.log(req.params.productId, '<<<<<<<<<<< product ID');
        try {
            // price: this.tourDetail.price,
            // paid: true
            let { price, paid } = req.body
            let id = req.params.tourId
            const newBooking = await Booking.create({ TourId: id, UserId: req.user.id, price, paid })
            res.status(201).json({ newBooking })
        } catch (error) {
            next(error)
        }
    }

    static async generateToken(req, res, next) {
        try {
            let { price } = req.body
            let foundUser = await User.findByPk(req.user.id)
            // Create Snap API instance
            let snap = new midtransClient.Snap({
                // Set to true if you want Production Environment (accept real transaction).
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY
            });
            let parameter = {
                "transaction_details": {
                    "order_id": "TRANSACTIONS_" + Math.floor(1000000 + Math.random() * 9000000),
                    "gross_amount": +price // ini pakai harga dari tour
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    email: foundUser.email
                }
            };
            const midtransToken = await snap.createTransaction(parameter)
            console.log(midtransToken);
            res.status(201).json(midtransToken)
            // snap.createTransaction(parameter)
            //     .then((transaction) => {
            //         // transaction token
            //         let transactionToken = transaction.token;
            //         console.log('transactionToken:', transactionToken);
            //     })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = BookingController