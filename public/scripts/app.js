/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
  

 */
$(document).ready(function() {

  const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];






 function createTweetElement(tweet) {
     const tweet$ = $("<article>").addClass("tweet");
     const header$ = $("<header>").addClass("clearfix");
     const img$ = $("<img>").addClass();
     const handle$ = $("<div>").addClass("handle");
     const name$ = $("<div>").addClass("name");
     const tweetTxt$ = $("<p>").addClass("content");
     const time$ = $("<footer>").addClass("date");



  $("<header>").text(tweet.user.name).appendTo(header$);

  $("<img>").text(tweet.user.avatars.small).appendTo(img$);


  $("<div>").text(tweet.user.handle).appendTo(handle$);

  $("<div>").text(tweet.user.name).appendTo(name$);

  $("<p>").text(tweet.user.content).appendTo(tweetTxt$);


  $("<p>").text(tweet.user.created_at).appendTo(time$);

  tweet$.append(header$, img$, handle$, name$, tweetTxt$, time$)

  return tweet$;  
  }

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.


renderTweets(data);




function renderTweets(data) {
  data.forEach(function(el) {
    var tweet1$ = createTweetElement(el);
    $('#tweet-container').append(tweet1$);
  })
}


});



