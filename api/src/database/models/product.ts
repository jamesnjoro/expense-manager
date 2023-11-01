'use strict';

import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { sequelize } from './sequelize'
import { authorizeByExpenditureId } from '../scopes';

export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {

  declare id: CreationOptional<number>;
  declare name: string;
  declare expenditureId: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    expenditureId: {
      type: DataTypes.NUMBER,
      references: {
        model: "expenditures",
        key: "id",
      },
      unique: "unique_expenditure_product",
    },
    name: {
      type: DataTypes.STRING,
      unique: "unique_expenditure_product",
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: "Product",
    scopes: {
      authorizeByExpenditureId
    },
    hooks:{
      beforeCreate(attributes) {
        attributes.name = attributes.name.toLowerCase();
      },
    }
  }
);

