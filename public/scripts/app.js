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
     const img$ = $("<img>").addClass("image");
     const handle$ = $("<div>").addClass("handle");
     const name$ = $("<div>").addClass("name");
     const tweetTxt$ = $("<p>").addClass("content");
     const time$ = $("<footer>").addClass("date");

 tweet$.append(header$, img$, handle$, name$, tweetTxt$, time$)

  
   tweet$.find('.clearfix').text(tweet.user.name);
   tweet$.find('.image').attr('src',tweet.user.avatars.large);
   tweet$.find('.handle').text(tweet.user.handle);
   tweet$.find('.name').text(tweet.user.name);
   tweet$.find('.content').text(tweet.content.text);
   tweet$.find('.date').text(tweet.user.created_at)


  // $("<p>").text(tweet.content.text).appendTo(tweetTxt$);


  // $("<p>").text(tweet.user.created_at).appendTo(time$);



  return tweet$;  
  }

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.


//renderTweets(data);
function validateForm(text) {
  var errorMessage = "";
  if(text > 140) {
    errorMessage = "Too many characters in your tweet"
  } else if(text === "") {
    errorMessage = "Nothing inputed"
  }
 return errorMessage;
}


function renderTweets(data) {
  data.forEach(function(el) {
    var tweet1$ = createTweetElement(el);
    $('#tweet-container').prepend(tweet1$);
  })
}



$('#tweet-form').on('submit', function(evt) {
  evt.preventDefault()
  const textValue = $(this).find('textarea').val();
  const errorMessage = validateForm(textValue);
  if(errorMessage) {
    $(".c-error").show().slideDown();
    console.log("This is working", $(this).find(".error-message"), errorMessage)
    $(".error-message").text(errorMessage);
  } else {
    $(".c-error").hide().slideUp();
    $.ajax("/tweets", { method: 'POST', data: $(this).serialize()})
    .then(function() {
      loadTweet();

    });   
  }
 });
 loadTweet()  



 $('#button').on('click', function() {
$('.new-tweet').slideToggle(400);
$( "#textarea" ).focus();
});


 function loadTweet() {
  $.ajax( {url: "/tweets", method: 'GET'})
  .then(function(tweets) {
    renderTweets(tweets); 
  });
};





});