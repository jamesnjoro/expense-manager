'use strict';

import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { sequelize } from './sequelize'
import { authorizeByExpenditureId } from '../scopes';

export class Tag extends Model<InferAttributes<Tag>, InferCreationAttributes<Tag>> {

  declare id: CreationOptional<number>;
  declare expenditureId: string;
  declare name: string;
  declare type: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Tag.init(
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
    type: {
      type: DataTypes.STRING,
      unique: "unique_expenditure_product",
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: "Tag",
    scopes: {
      authorizeByExpenditureId
    },
    hooks: {
      beforeCreate(attributes) {
        attributes.name = attributes.name.toLowerCase();
      },
    }
  }
);

