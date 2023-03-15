const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projectdb', 'root', 'madhu', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false // Disable createdAt and updatedAt columns
  }
});

module.exports = sequelize;
