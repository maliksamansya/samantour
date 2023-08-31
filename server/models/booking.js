'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.User, { foreignKey: 'UserId' })
      Booking.belongsTo(models.Tour, { foreignKey: 'TourId' })

    }
  }
  Booking.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    TourId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'price is required'
        },
        notEmpty: {
          msg: 'price is required'
        }
      }
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'paid is required'
        },
        notEmpty: {
          msg: 'paid is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};