import { faker } from '@faker-js/faker';
import { Expenditure } from '../models';
const buildFake = require("../factories");

module.exports = async () => {
    let product: any = {};

    const expenditureBody = await buildFake('expenditure', 1,true);
    const expenditure = await Expenditure.create(expenditureBody[0]);

    product.expenditure_id = expenditure.id;
    product.name = faker.commerce.product();
    product.created_at = new Date().toISOString();
    product.updated_at = new Date().toISOString();

    return product;
}


