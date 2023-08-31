const { verifyToken } = require('../helpers/helper')
const { Booking, Tour, User } = require('../models')
const userAuthenctication = async (req, res, next) => {
    // console.log(req.headers);
    try {
        //* 1. akses token dari req.headers yang diinput user
        let { accest_token } = req.headers
        // console.log(accest_token);
        //* 2. cek bila token yang diinput salah
        if (!accest_token) throw { name: 'Unauthenticated' }
        //* 3. decode token menjadi obj literal
        let payload = verifyToken(accest_token)
        // cari user dengan id yang cocok dengan payload
        //* 4. cek user dengan id yang sama dengan payload
        let user = await User.findByPk(payload.id)
        //* 5. cek apakah user ada, bila tidak ada maka throw error lagi
        if (!user) throw { name: "Unauthenticated" }
        //* 6. Tambah properti user kedalam object req, yang berisi data dari customer yang login
        // properti req.user ini akan diteruskan selaman satu jalur dengan middlewareNya
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role
        }
        //* 7. next()
        next()

    } catch (error) {
        // // console.log(error);
        // if (error.name = 'Unauthenticated' || error.name === 'JsonWebTokenError') {
        //     res.status(401).json({ msg: 'Unauthenticated' })
        // } else {
        //     res.status(500).json({ msg: 'Internal server error' })
        // }
        next(error)
    }
}


const userAuthorization = async (req, res, next) => {
    try {
        // jika ada ingin mengBookmark product pastikan jangan sampai dua kali
        // mengBookmark produck yang sama
        // jangan mengBookmark product dengan ProductId yang sama
        let id = req.params.tourId
        let bookedTour = await Booking.findOne({
            where: {
                UserId: req.user.id,
                TourId: id
            }
        })
        if (bookedTour) throw { name: 'Duplicate Bookings' }
        next()
    } catch (error) {
        next(error)
    }

}


const errorHandler = (error, request, response, next) => {
    let status
    let msg
    switch (error.name) {
        case "SequelizeUniqueConstraintError":
            status = 400
            msg = error.errors[0].message
            break
        case "SequelizeValidationError":
            status = 400
            msg = error.errors[0].message
            break
        case "EmailPasswordIsRequired":
            status = 400
            msg = "Email/Password is required"
            break
        case "EmailPasswordInvalid":
            status = 401
            msg = 'Email / Password is incorrect'
            break
        case "NOTFOUND":
            status = 404
            msg = 'Data not found'
            break
        case "Unauthenticated":
        case "JsonWebTokenError":
            status = 401
            msg = "Unauthenticated"
            break
        case "Unauthorized":
            status = 403
            msg = "Unauthorized"
            break
        case 'Duplicate Bookings':
            status = 403
            msg = 'Tour already booked'
            break
        default:
            console.log(error);
            status = 500
            msg = "Internal server error"
            break
    }
    response.status(status).json({ msg })
}

module.exports = {
    errorHandler,
    userAuthenctication,
    userAuthorization
}