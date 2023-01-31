import { Sequelize } from "sequelize";

const sequelize = new Sequelize("rapdb", "appdev", "dev123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const synDb = () => {
  connect();
  sequelize
    .sync()
    .then(() => {
      console.log("Scan table created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};

synDb();

export default sequelize;

