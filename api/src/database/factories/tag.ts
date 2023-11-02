import { faker } from '@faker-js/faker';
import { Expenditure } from '../models';
const buildFake = require("../factories");

module.exports = async () => {
    let tag: any = {};

    const expenditureBody = await buildFake('expenditure', 1,true);
    const expenditure = await Expenditure.create(expenditureBody[0]);

    tag.expenditure_id = expenditure.id;
    tag.name = faker.commerce.product();
    tag.type = faker.helpers.arrayElement(['product', 'expense']);
    tag.created_at = new Date().toISOString();
    tag.updated_at = new Date().toISOString();

    return tag;
}


