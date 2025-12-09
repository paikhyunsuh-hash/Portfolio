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
