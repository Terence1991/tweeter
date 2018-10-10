const characterLimit = 140;



$(document).ready(function() {
    let $counter = $(".counter");
    $("textarea[name=text]").on('keyup', function() {
      const textValue = $(this).val()
      const newLimit = characterLimit - textValue.length; 
      $counter.text(newLimit);
      const className = "invalid"; 

      if(newLimit >= 0) {
        $counter.removeClass(className);
      } else {
        $counter.addClass(className);
      }
      
    })
  });

  