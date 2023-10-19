
'use strict';

import {Sequelize} from 'sequelize'

import {sequelize} from './sequelize'
import {User} from './user'


module.exports =  {
  User,
  sequelize,
  Sequelize
};
export { User };

