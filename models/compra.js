'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Compra.init({
    id_produto: DataTypes.INTEGER,
    data_compra: DataTypes.DATEONLY,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};