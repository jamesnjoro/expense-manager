import { faker } from '@faker-js/faker';
import { User, Expenditure } from '../models';
const buildFake = require("../factories");

module.exports = async () => {
    let expenditureUser: any = {};
    const userBody = await buildFake('user', 1,true);
    const user = await User.create(userBody[0])

    const expenditureBody = await buildFake('expenditure', 1,true);
    const expenditure = await Expenditure.create(expenditureBody[0]);

    expenditureUser.expenditure_id = expenditure.id;
    expenditureUser.user_id = user.id;
    expenditureUser.access_level = faker.helpers.arrayElement(['read', 'write', 'admin'])
    expenditureUser.created_at = new Date().toISOString();
    expenditureUser.updated_at = new Date().toISOString();

    return expenditureUser;
}


