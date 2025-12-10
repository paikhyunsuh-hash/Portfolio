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
// GSAP Horizontal Scroll Setup
const container = document.querySelector("#projectsPage2"); // The section element
const slider = document.querySelector(".projectList2"); // The ul that will be translated

// We need to calculate the actual width needed for the horizontal scroll.
// This is best done on the `onRefresh` or `onResize` of ScrollTrigger
// to account for dynamic changes and correct initial load.

gsap.to(slider, {
  // The 'x' animation value will be set dynamically via the function
  x: () => -(slider.scrollWidth - container.offsetWidth),
  ease: "none",

  scrollTrigger: {
    trigger: container,
    pin: true,
    start: "top top",
    // Dynamically calculate the vertical scroll distance needed.
    // The vertical scroll distance must be equal to the horizontal distance to travel.
    end: () => "+=" + (slider.scrollWidth - container.offsetWidth),
    scrub: 1,
    // markers: true, // Uncomment for debugging

    // Ensure the end value is re-calculated on resize/load
    invalidateOnRefresh: true,
  },
});
