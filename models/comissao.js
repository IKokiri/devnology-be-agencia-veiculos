'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Comissao.init({
    id_venda: DataTypes.INTEGER,
    id_funcionario: DataTypes.INTEGER,
    comissao: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Comissao',
  });
  return Comissao;
};