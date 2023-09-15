const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    ProductTag_ID :
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Product_ID :
    {
      type: DataTypes.INTEGER,
      references:
      {product_id: 'product_id'},
    },
    Tag_ID :
    { 
      type: DataTypes.INTEGER,
      references:
      {tag_id: 'tag_id'},
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
