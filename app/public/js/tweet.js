
$("#tweet-submit").on("click", function(event) {
    event.preventDefault();

    const newTweet = {
      author: $("#author").val().trim(),
      body: $("#tweet-box").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newTweet);
  
    $.post("/api/tweets", newTweet)
      .then(function() {
  
        const row = $("<div>");
        row.addClass("tweet");
  
        row.append("<p>" + newTweet.author + " tweeted: </p>");
        row.append("<p>" + newTweet.body + "</p>");
        row.append("<p>At " + moment(newTweet.created_at).format("h:mma on dddd") + "</p>");
  
        $("#tweet-area").prepend(row);
  
      });
  
    $("#author").val("");
    $("#tweet-box").val("");
  });
  
  $.get("/api/tweets", function(data) {
  
    if (data.length !== 0) {
  
      for (let i = 0; i < data.length; i++) {
  
        const row = $("<div>");
        row.addClass("tweet");
  
        row.append("<p>" + data[i].author + " tweeted.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#tweet-area").prepend(row);
  
      }
  
    }
  
  });