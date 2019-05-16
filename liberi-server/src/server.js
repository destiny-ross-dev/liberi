const express = require("express");
// const config = require("./modules/config");
const port = process.env.PORT || 3400;
import globalMiddleware from "./modules/middleware";
import { signup } from "./api/auth/authControllers";
import connect from "./modules/db";

// Initializes express server
const app = express();

// Global middleware
globalMiddleware(app);

app.post("/signup", signup);

const start = async () => {
  try {
    await connect(app);
    app.listen(port, () => {
      console.log(`Rest api on http://localhost:${port}/`);
    });
  } catch (e) {
    console.log(e);
  }
};

export default start;
