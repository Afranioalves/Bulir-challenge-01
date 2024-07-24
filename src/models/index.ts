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


users.hasMany(hires, {
    constraints: true,
    foreignKey: "id",
  });

hires.belongsTo(users, {
    as: "provider",
    constraints: true,
    foreignKey: "providerId",
});


users.hasMany(hires, {
    constraints: true,
    foreignKey: "id",
  });

hires.belongsTo(users, {
    as: "costumer",
    constraints: true,
    foreignKey: "costumerId",
});

services.hasMany(hires, {
    constraints: true,
    foreignKey: "id",
  });

hires.belongsTo(services, {
    as: "service",
    constraints: true,
    foreignKey: "serviceId",
});






export default Models