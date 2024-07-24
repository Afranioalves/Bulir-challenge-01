import users from "./user.model";
import accounts from "./account.model";
import services from "./service.model";
import hires from "./hire.model";

const Models = { users, accounts, services, hires };

users.hasMany(services, {
    constraints: true,
    foreignKey: "id",
  });

services.belongsTo(users, {
    constraints: true,
    foreignKey: "ownerId",
});




export default Models