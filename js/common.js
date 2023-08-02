function scrollHandler() {

  if($(window).scrollTop() >= $(".about").position().top){
    $(".skill").each(function() {
      var skill = $(this);
      var percentage = skill.find(".percentage").text();
      skill.find(".inner-bar").animate({width: percentage}, 1200);
    });
  }
}
