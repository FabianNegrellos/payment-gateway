const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.INTEGER, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false, defaultValue: "usd" },
    status: { type: DataTypes.ENUM("pending", "paid", "failed"), allowNull: false, defaultValue: "pending" }
  }, { tableName: "Orders", timestamps: true });

  return Order;
};
