import users from "./user.model";
import accounts from "./account.model";
import services from "./service.model";
import transactions from "./transaction.model";

const Models = { users, accounts, services, transactions };

users.hasMany(services, {
    constraints: true,
    foreignKey: "id",
  });

services.belongsTo(users, {
    constraints: true,
    foreignKey: "ownerId",
});

export default Models