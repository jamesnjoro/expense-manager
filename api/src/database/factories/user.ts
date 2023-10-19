import { faker } from '@faker-js/faker'


import { hashPasword } from '../../helpers/passwordHash';

module.exports = async() => {
    let user:any = {};
    user.name = faker.person.firstName();
    user.email = faker.internet.email();
    user.password_hash = hashPasword("test123");
    user.createdAt = new Date().toISOString();
    user.updatedAt = new Date().toISOString();

    return user;
}


