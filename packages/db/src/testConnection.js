const db = require("./index");

(async () => {
  try {
    await db.sequelize.authenticate();
    console.log("✅ Conexión exitosa a la base de datos.");

    // Prueba: contar usuarios
    const usersCount = await db.User.count();
    console.log(`👤 Usuarios en la BD: ${usersCount}`);
  } catch (error) {
    console.error("❌ Error conectando a la BD:", error);
  } finally {
    await db.sequelize.close();
  }
})();
