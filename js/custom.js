$(function () {
  $(".projectList li").on("click", function () {
    let i = $(this).index();
    $(".projectList li").addClass("nonActive");
    $(".projectList li").removeClass("active");
    $(this).removeClass("nonActive");
    $(this).addClass("active");

    $(".projectOverview li").stop().animate({ right: "-100%" }, 300);
    $(".projectOverview li").eq(i).stop().animate({ right: "0%" }, 300);
  });
});

/*VISUAL FADE*/
$(function () {
  let total = $(".preview li").length;
  console.log(total);

  let i = 0;

  setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".preview li").fadeOut();
    $(".preview li").eq(i).stop().fadeIn();
  }, 3000);
});
