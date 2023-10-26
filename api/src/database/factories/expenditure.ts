import { faker } from '@faker-js/faker'

module.exports = async() => {
    let expenditure:any = {};
    expenditure.name = faker.finance.accountName();
    expenditure.created_at = new Date().toISOString();
    expenditure.updated_at = new Date().toISOString();

    return expenditure;
}


