
'use strict';

import { Sequelize } from 'sequelize'

import { sequelize } from './sequelize'
import { User } from './user'
import { Expenditure } from './expenditure'
import { ExpenditureUser } from './expenditure_user';
import { Product } from './product';
import associations from './associations';

associations();

export {
  User,
  Expenditure,
  ExpenditureUser,
  Product,
  sequelize,
  Sequelize,
};

