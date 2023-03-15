const { DataTypes } = require('sequelize');
const sequelize =require('../sequelizeInstance/sequelizeInstance')

const Symptom = sequelize.define('symptoms', {
  symptom_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  symptom: {
    type: DataTypes.STRING(45),
    allowNull: false
  }
}, {
  tableName: 'symptoms',
  timestamps: false
});

module.exports = Symptom;
