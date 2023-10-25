import { faker } from '@faker-js/faker'

module.exports = async() => {
    let expenditure:any = {};
    expenditure.name = faker.finance.accountName();
    expenditure.createdAt = new Date().toISOString();
    expenditure.updatedAt = new Date().toISOString();

    return expenditure;
}


