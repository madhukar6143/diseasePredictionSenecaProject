const { DataTypes } = require('sequelize');
const sequelize =require('../sequelizeInstance/sequelizeInstance')

const Disease = sequelize.define('disease', {
  disease_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  disease_name: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  tableName: 'disease',
  timestamps: false
});

module.exports = Disease;
