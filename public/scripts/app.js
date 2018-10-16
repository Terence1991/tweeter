$(document).ready(function() {
 
// generates and returns a new tweet element dynamically
  function createTweetElement(tweet) {
    const tweet$ = $("<article>")
      .addClass("tweet");
    const header$ = $("<header>")
      .addClass("clearfix");
    const img$ = $("<img>")
      .addClass("image")
      .attr('src',tweet.user.avatars.large);
    const handle$ = $("<div>")
      .addClass("handle")
      .text(tweet.user.handle);
    const name$ = $("<div>")
      .addClass("name")
      .text(tweet.user.name);
    const tweetTxt$ = $("<p>")
      .addClass("content")
      .text(tweet.content.text);
    const footer$ = $("<footer>");
    const time$ = $("<div>").addClass("date")
      .text(moment(tweet.created_at).fromNow()); 
    const span$ = $('<span>')
      .addClass('icons');
    const heartIcon$ = $("<i>") 
      .addClass("fas fa-heart");
    const flagIcon$ = $("<i>")
      .addClass("fas fa-flag");
    const retweetIcon$= $("<i>")
      .addClass("fas fa-retweet");

    span$.append(heartIcon$, flagIcon$, retweetIcon$);
    header$.append(img$, name$, handle$)
    footer$.append(time$, span$);
    tweet$.append(header$, tweetTxt$, footer$)
  
    return tweet$;  
  }

  //validate the tweet content and check for over the limit or empty tweets
  function validateForm(text) {
    let errorMessage = "";
    if (text.length > 140) {
      errorMessage = "Too many characters in your tweet"
    } else if(text === "") {
      errorMessage = "Please enter a tweet"
    }
    return errorMessage;
  }

  function renderTweets(data) {
    data.forEach(function (el) {
      const tweet = createTweetElement(el);
      $('#tweet-container').prepend(tweet);
    });
  }
  
  //Generate tweet and handles errors 
  $('#tweet-form').on('submit', function (evt) {
    evt.preventDefault();
    const tweetContent = $(this).find('textarea').val();
    const errorMessage = validateForm(tweetContent);
    console.log({errorMessage});
    if (errorMessage) {
      $(".error-msg").show().slideDown();
      $(".error-msg").text(errorMessage);
    } else {
      $(".error-msg").hide().slideUp();
      $.ajax("/tweets", { method: 'POST', data: $(this).serialize() })
        .then( () => {
        loadTweet();
        $( "#textarea").val('');
        $(this)
          .find('.counter')
          .text(140)
      });
    }
  });
  loadTweet();  

  $('#button').on('click', function () {
    $('.new-tweet').slideToggle(400);
    $("#textarea").focus();
    $("#textarea").val('');
  });

  function loadTweet() {
      $.ajax({ url: "/tweets", method: 'GET'})
        .then(function (tweets) {
          renderTweets(tweets);
      });
  }

});