const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Transaction = sequelize.define("Transaction", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    orderId: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.INTEGER, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false, defaultValue: "usd" },
    status: {
      type: DataTypes.ENUM(
        "requires_payment_method",
        "requires_confirmation",
        "requires_action",
        "processing",
        "succeeded",
        "failed"
      ),
      allowNull: false
    },
    stripePaymentIntentId: { type: DataTypes.STRING, allowNull: false },
    stripeChargeId: { type: DataTypes.STRING, allowNull: true }
  }, { tableName: "Transactions", timestamps: true });

  return Transaction;
};
