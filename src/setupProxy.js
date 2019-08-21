const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(["/api", , "/otherApi"], { target: "https://us-central1-socialape-5fb9d.cloudfunctions.net/api" })
  );
};