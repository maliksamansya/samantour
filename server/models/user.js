'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Tour, { through: models.Booking })
      User.hasMany(models.Booking, { foreignKey: 'UserId' })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "username is required"
        },
        notEmpty: {
          msg: "username is required"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "email already used"
      },
      validate: {
        notNull: {
          msg: "email is required"
        },
        notEmpty: {
          msg: 'email is required'
        },
        isEmail: {
          msg: "email format is incorrect"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password is required'
        },
        notEmpty: {
          msg: "password is required"
        },
        lengthMin(value) {
          if (value.length < 5) {
            throw new Error('password minimal 5 character');
          }
        }

      }
    },
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(instance, option) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(instance.password, salt);
        instance.role = 'Admin'
        instance.password = hash
      }
    }
  });
  return User;
};