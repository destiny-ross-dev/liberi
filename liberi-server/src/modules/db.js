import massive from "massive";
import config from "../config";

const connect = (app, appConfig = config) => {
  massive(appConfig.db)
    .then(db => {
      app.set("db", db);
    })
    .catch(err => console.log(err));
};
console.log(config);
export default connect;
