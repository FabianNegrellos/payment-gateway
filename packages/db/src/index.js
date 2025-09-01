const fs = require("fs");
const path = require("path");
const sequelize = require("./config");

const models = {};

fs.readdirSync(path.join(__dirname, "models"))
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const modelDef = require(path.join(__dirname, "models", file));
    const model = modelDef(sequelize);
    models[model.name] = model;
  });

const { User, Order, Transaction } = models;

if (User && Order) {
  User.hasMany(Order, { foreignKey: "userId" });
  Order.belongsTo(User, { foreignKey: "userId" });
}

if (Order && Transaction) {
  Order.hasMany(Transaction, { foreignKey: "orderId" });
  Transaction.belongsTo(Order, { foreignKey: "orderId" });
}

module.exports = { sequelize, ...models };
