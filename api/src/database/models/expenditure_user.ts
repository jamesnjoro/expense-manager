"use strict";

import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "./sequelize";
import { authorizeByExpenditureId } from "../scopes";

export class ExpenditureUser extends Model<
  InferAttributes<ExpenditureUser>,
  InferCreationAttributes<ExpenditureUser>
> {
  declare id: CreationOptional<number>;
  declare expenditureId: number;
  declare userId: number;
  declare accessLevel: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

ExpenditureUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    expenditureId: {
      type: DataTypes.NUMBER,
      references: {
        model: "expenditures",
        key: "id",
      },
      unique: "unique_expenditureId_userId",
    },
    userId: {
      type: DataTypes.NUMBER,
      references: {
        model: "users",
        key: "id",
      },
      unique: "unique_expenditureId_userId",
    },
    accessLevel: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    freezeTableName: true,
    tableName: "expenditure_user",
    sequelize,
    modelName: "ExpenditureUser",
    scopes:{
      authorizeByExpenditureId
    }
  }
);

