var Tweet = require("./tweet");

// Routes
module.exports = function(app) {

  // Get all tweets
  app.get("/api/tweets", function(req, res) {

    // Finding all Tweets, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Tweet.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a tweet
  app.post("/api/tweets", function(req, res) {

    console.log("Tweet Data:");
    console.log(req.body);

    Tweet.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created tweet
      res.end();
    });

  });

};