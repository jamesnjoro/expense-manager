'use strict';

import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize';
import { sequelize } from './sequelize'
import { authorizeById } from '../scopes';

export class Expenditure extends Model<InferAttributes<Expenditure>, InferCreationAttributes<Expenditure>> {

  declare id: CreationOptional<number>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Expenditure.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  },
  {
    sequelize,
    modelName: "Expenditure",
    scopes: {
      authorizeById
    }
  }
);

