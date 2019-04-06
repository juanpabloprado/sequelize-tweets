// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Tweet" model that matches up with DB
const Tweet = sequelize.define("tweet", {
  author: Sequelize.STRING,
  body: Sequelize.STRING,
  created_at: Sequelize.DATE
});

// Syncs with DB
Tweet.sync();

// Makes the Tweet Model available for other files (will also create a table)
module.exports = Tweet;