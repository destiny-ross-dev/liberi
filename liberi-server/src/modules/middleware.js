import bodyParser from "body-parser";
import logger from "morgan-body";
import cors from "cors";

const globalMiddleware = app => {
  // parses url-encoded data (parameters) with the querystring library when true.
  app.use(bodyParser.urlencoded({ extended: false }));

  // Parses req.body, making it readable on the request object
  app.use(bodyParser.json());

  // Enables Cross Origin Resource Sharing
  app.use(cors());

  //Logging middleware for request and response bodies
  logger(app);
};

export default globalMiddleware;
