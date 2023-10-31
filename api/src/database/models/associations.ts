import { User, Expenditure, ExpenditureUser } from './index'

export default () => {
    //User
    User.belongsToMany(Expenditure, {
        as: "userexpenditures",
        foreignKey: {field:'userId',allowNull:false},
        otherKey: "expenditureId",
        through: "expenditure_user",
    })

    //Expenditure
    Expenditure.belongsToMany(User, {
        as: "expenditureUsers",
        foreignKey: "expenditureId",
        otherKey: "userId",
        through: "expenditure_user",
    })

    //ExpenditureUser
    ExpenditureUser.belongsTo(User, {
        foreignKey: "userId",
    });

    ExpenditureUser.belongsTo(Expenditure, {
        foreignKey: "expenditureId",
    });
}
