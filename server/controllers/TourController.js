const { Booking, Tour, User } = require('../models')
const { Op } = require("sequelize");
const axios = require('axios')



class TourController {

    static async createTour(req, res, next) {
        // console.log(req.user, '<<<<< ini dari create');
        try {

            let { name, duration, maxGroupSize, difficulty, price, description, imageCover, startDates, image, startLocation, locations, guides } = req.body
            console.log(req.body);
            const newTour = await Tour.create({ name, duration, maxGroupSize, difficulty, price, description, imageCover, startDates, image, startLocation, locations, guides })
            res.status(201).json({
                newTour
            })

        } catch (error) {

            next(error)
        }
    }


    static async findAllTour(req, res, next) {
        console.log(req.query);
        const { page, pageSize, filter } = req.query;
        let paramQuerySQL = {}
        let limit;
        let offset;

        if (filter !== '' && typeof filter !== 'undefined') {
            paramQuerySQL.where = {
                name: {
                    [Op.iLike]: `%${filter}%`,
                }
            }
        }
        // pagination
        if (page > 1 && pageSize) {
            limit = +pageSize
            paramQuerySQL.limit = limit;

            offset = page * limit - limit;
            paramQuerySQL.offset = offset;
        }
        else {
            limit = 8; // limit 5 item
            offset = 0;
            paramQuerySQL.limit = limit;
            paramQuerySQL.offset = offset;
        }


        try {

            paramQuerySQL.order = [
                ["id", "DESC"],
            ]
            paramQuerySQL.attributes = { exclude: ['createdAt', 'updatedAt'] }

            //TODO
            const totalTour = await Tour.findAll()
            const tours = await Tour.findAll(paramQuerySQL)
            res.status(200).json({
                totalTour: totalTour.length,
                tours,
            })
        } catch (error) {

            next(error)
        }

    }

    static async findTourById(req, res, next) {
        try {
            let id = +req.params.id
            // const { data } = await axios({
            //     url: 'https://api.qr-code-generator.com/v1/create',
            //     method: 'post',
            //     params: {
            //         "access-token": 'wJLfG7TTQvAtW7EH50maq653OMIPv2ZuV1JSefDQ9gID8H8RwSv-LbWo1bWgmejx'
            //     },
            //     data: {
            //         "frame_name": "no-frame",
            //         "qr_code_text": `https://samantour-ff580.web.app/tours/${id}`,
            //         "image_format": "SVG",
            //         "qr_code_logo": "scan-me-square"
            //     }
            // })
            const tour = await Tour.findByPk(id, {
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })
            if (tour === null) {
                throw { name: 'NOTFOUND' }
            } else {
                res.status(200).json({
                    tour,
                    // data
                })
            }

        } catch (error) {

            next(error)
        }

    }

    static async deleteTour(req, res, next) {
        try {
            let id = +req.params.id
            const deletedTourPra = await Tour.findByPk(id)
            const deletedTour = await Tour.destroy({
                where: {
                    id: id
                }
            })
            if (deletedTour === null || deletedTourPra === null) {
                throw { name: 'NOTFOUND' }
            } else {
                res.status(200).json({
                    msg: 'succes',
                    data: deletedTourPra
                })
            }
        } catch (error) {

            next(error)
        }
    }

    static async editTour(req, res, next) {
        try {
            let id = req.params.id
            const tour = await Tour.findByPk(+id)
            if (!tour) throw { name: "NOTFOUND" }
            res.status(200).json({
                msg: "succes",
                data: tour
            })

        } catch (error) {
            next(error)
        }
    }

    static async updateTour(req, res, next) {
        try {
            let id = req.params.id
            let { name, duration, maxGroupSize, difficulty, price, description, imageCover, startDates, image, startLocation, locations, guides } = req.body
            const updatedProduct = await Product.update({ name, duration, maxGroupSize, difficulty, price, description, imageCover, startDates, image, startLocation, locations, guides }, {
                where: {
                    id: id
                }
            })
            res.status(201).json({ msg: "succesfully updated" })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = TourController