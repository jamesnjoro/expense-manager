module.exports = async (
    ModelName,
    NumberOfInstances = 1,
) => {
    const path = `../../../dist/database/factories/`;
    const getFactory = require(path + ModelName);
    let instances = [];
    for (let i = 0; i < NumberOfInstances; i++) {
        let instance = await getFactory();
        instances.push(instance);
    }
    return instances;
}
