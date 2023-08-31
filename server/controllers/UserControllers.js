const { hashPassword, comparePassword, signToken } = require('../helpers/helper')
const { Booking, Tour, User } = require('../models')
const { OAuth2Client } = require('google-auth-library');


class UserController {
    static async register(req, res, next) {
        // console.log(req.body);
        try {
            let { username, email, password, phoneNumber, address } = req.body
            const newUser = await User.create({ username, email, password, phoneNumber, address })
            res.status(201).json({
                status: 'succes',
                msg: `User with email ${newUser.email} and id ${newUser.id} has been created`
            })

        } catch (error) {

            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            //TODO 1. Validasi dulu apakah email atau password dikirim atau tidak null 
            if (!email || !password) throw ({ name: "EmailPasswordIsRequired" })

            //TODO 2. Kita cari user di database berdasarkan email yang dikirim user
            const foundUser = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!foundUser) throw ({ name: 'EmailPasswordInvalid' })
            //TODO 3. Bandingkan password yang dikirim client dengan yang sudah di hash
            const isAuthenticated = comparePassword(password, foundUser.password)
            if (!isAuthenticated) throw ({ name: 'EmailPasswordInvalid' })
            //TODO 4. Generate token
            // let payload = foundUser.id
            const token = signToken({ id: foundUser.id }) // biasanya yang menjadi itu cuma id dari user
            //TODO 5. Kirim token ke client
            res.status(200).json({
                msg: 'Login succesfull',
                accest_token: token
            })
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

    static async signInGoogle(req, res, next) {
        try {
            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            const { google_token } = req.headers
            const ticket = await client.verifyIdToken({
                idToken: google_token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            /* 
                TODO step2 yang harus dilakukan selanjutnya
                1. cari user berdasarkan email yang di dapat dari payload google
                    - Kalau belum ada kita register menggunakan email yang tadi, generate jwt
                    - kalau sudah ada, kita generate jwt menggunakan secret server kita
                2. Balikin respon ke client
            */
            let user = await User.findOne({
                where: {
                    email: payload.email
                }
            })

            if (!user) {
                user = await User.create({
                    username: payload.given_name + payload.family_name,
                    email: payload.email,
                    password: hashPassword(String(Math.random())),
                    role: "Staff",

                }, {
                    hooks: false
                })
            }

            const accest_token = signToken({
                id: user.id
            })
            res.status(200).json({ accest_token })
        } catch (error) {

            next(error)
        }


    }
}

module.exports = UserController