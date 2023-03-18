import { Sequelize } from "sequelize";

const sequelize = new Sequelize("rapdb", "appdev", "dev123", {
  host: "localhost",
  dialect: "mysql",
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Synchronizing all models at once
function syncDb() {
  checkConnection();
  sequelize
    .sync()
    .then(() => console.log("Tables from all models created successfully"))
    .catch((err) => console.error("Unable to create tables : ", err));
}

syncDb();

export const db = sequelize;
