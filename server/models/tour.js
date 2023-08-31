'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tour.belongsToMany(models.User, { through: models.Booking })
      Tour.hasMany(models.Booking, { foreignKey: 'TourId' })
    }
  }
  Tour.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This tour name already used'
      },
      validate: {
        notNull: {
          msg: 'name is required'
        },
        notEmpty: {
          msg: 'name is required'
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'duration is required'
        },
        notEmpty: {
          msg: 'duration is required'
        }
      }
    },
    participant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'participant is required'
        },
        notEmpty: {
          msg: 'participant is required'
        }
      }
    },
    slot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'slot is required'
        },
        notEmpty: {
          msg: 'slot is required'
        }
      }
    },
    difficulty: DataTypes.STRING,
    ratingsAverage: DataTypes.NUMBER,
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'description is required'
        },
        notEmpty: {
          msg: 'description is required'
        }
      }
    },
    imageCover: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'imageCover is required'
        },
        notEmpty: {
          msg: 'imageCover is required'
        }
      }
    },
    startDates: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'startDates is required'
        },
        notEmpty: {
          msg: 'startDates is required'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'image is required'
        },
        notEmpty: {
          msg: 'image is required'
        }
      }
    },
    startLocation: DataTypes.STRING,
    lat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'lat is required'
        },
        notEmpty: {
          msg: 'lat is required'
        }
      }
    },
    lng: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'lng is required'
        },
        notEmpty: {
          msg: 'lng is required'
        }
      }
    },
    guides: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'guides is required'
        },
        notEmpty: {
          msg: 'guides is required'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};