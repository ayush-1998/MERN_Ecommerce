const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//Config
dotenv.config({ path: "backend/config/config.env" });

//Connecting to Database

connectDatabase();
const PORT = process.env.PORT;

app.listen(5000, () => {
  console.log("server is working");
});
