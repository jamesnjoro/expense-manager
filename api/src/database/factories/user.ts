import { faker } from '@faker-js/faker'


import { hashPasword } from '../../helpers/auth/passwordHash';

module.exports = async() => {
    let user:any = {};
    user.name = faker.person.firstName();
    user.email = faker.internet.email();
    user.password_hash = hashPasword("test123");
    user.created_at = new Date().toISOString();
    user.updated_at = new Date().toISOString();

    return user;
}


