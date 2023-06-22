// split type
let text;

// Split the text up
function runSplit() {
  text = new SplitType("[animation=text-split]", {
    types: "characters", // Include "characters" type
    charClass: "character-stagger" // Add character class
  });
}

runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    text.revert();
    runSplit();
  }
});

// split type ends

document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider1", {
    type: "slider",
    perPage: 4,
    perMove: 1,
    arrows: false,
    gap: "40rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 2,
        perMove: 1,
        gap: "40rem",
        arrows: false
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        perMove: 1,
        gap: "20rem",
        arrows: false
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        perMove: 1,
        gap: "20rem",
        arrows: false
      }
    }
  });

  splide.mount();
});

$(".is--after-hero-home").each(function (index) {
  let image1 = $(this).find("[animation='image-1']");
  let image2 = $(this).find("[animation='image-2']");
  let image3 = $(this).find("[animation='image-3']");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "bottom top",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true
    }
  });

  tl.to(
    image1,
    {
      y: "-200rem"
    },
    0
  );
  tl.to(
    image2,
    {
      y: "200rem"
    },
    0
  );
  tl.from(
    image3,
    {
      y: "175rem"
    },
    0
  );
});

$(".title-wrapper").each(function (index) {
  let target = $(this).find(".heading-72.text-pink-border .character-stagger");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true
    }
  });

  tl.to(
    target,
    {
      color: "#000000",
      "-webkit-text-stroke-color": "transparent",
      stagger: { each: 0.05, from: "start", ease: "Quint.easeOut" },
      duration: 0.8
    },
    0
  );
});
