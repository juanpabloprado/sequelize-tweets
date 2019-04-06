const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("app/public"));

require("./app/api-routes.js")(app);

app.listen(PORT, function() {
  console.log(`🌎 ==> App listening on port ${PORT}`);
});