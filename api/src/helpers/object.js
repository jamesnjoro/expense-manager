const _camelCase = require("lodash/camelCase");

const convertKeysTocamelCase = (object) => {
  return Object.entries(object).reduce((carry, [key, value]) => {
    carry[_camelCase(key)] = value;
    return carry;
  }, {});
};

module.exports = convertKeysTocamelCase ;
