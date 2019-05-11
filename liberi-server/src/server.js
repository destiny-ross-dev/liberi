const express = require("express");
// const config = require("./config");
const port = process.env.PORT || 3400;
import globalMiddleware from "./modules/middleware";

// Initializes express server
const app = express();

// Global middleware
globalMiddleware(app);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Rest api on http://localhost:${port}/`);
    });
  } catch (e) {
    console.log(e);
  }
};

export default start;
