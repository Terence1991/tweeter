const characterLimit = 140;

$(document).ready(function() {
  const $counter = $(".counter");

  // This function calculates the numer of characters remaining in current tweet
  $("textarea[name=text]").on('keyup', function () {
    const textValue = $(this).val(); 
    const newLimit = characterLimit - textValue.length;
    $counter.text(newLimit);
    const className = "invalid";

    if (newLimit >= 0) {
      $counter.removeClass(className);
    } else {
      $counter.addClass(className);
    }
  });
});

  