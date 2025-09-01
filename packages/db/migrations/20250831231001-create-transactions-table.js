'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      orderId: { type: Sequelize.INTEGER, references: { model: 'Orders', key: 'id' }, onDelete: 'CASCADE' },
      amount: { type: Sequelize.INTEGER, allowNull: false },
      currency: { type: Sequelize.STRING, allowNull: false, defaultValue: 'usd' },
      status: {
        type: Sequelize.ENUM(
          "requires_payment_method",
          "requires_confirmation",
          "requires_action",
          "processing",
          "succeeded",
          "failed"
        ),
        allowNull: false
      },
      stripePaymentIntentId: { type: Sequelize.STRING, allowNull: false },
      stripeChargeId: { type: Sequelize.STRING, allowNull: true },
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('NOW()') }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};
