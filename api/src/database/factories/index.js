const convertKeysTocamelCase = require('../../helpers/object');

module.exports = async (
    ModelName,
    NumberOfInstances = 1,
    convertCamel = false
) => {
    const path = `../../../dist/database/factories/`;
    const getFactory = require(path + ModelName);
    let instances = [];
    for (let i = 0; i < NumberOfInstances; i++) {
        let instance = await getFactory();
        if(convertCamel){
            instance = convertKeysTocamelCase(instance);
        }
        instances.push(instance);
    }
    return instances;
}
