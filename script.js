gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 1
  });
  tl.from("[animation='loading']", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1,
    delay: -1
  });
}
pageLoad();

$("[animation='fade-in']").each(function (index) {
  let target = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200"
    }
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1
    },
    0
  );
});

$("[animation='parallax']").each(function (index) {
  let target = $(this);

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

  tl.from(
    target,
    {
      y: "-20%"
    },
    0
  );
});

$(".is-home-style").each(function (index) {
  let targettop = $(this).find(".image-nuantic");
  let targetbottom = $(this).find(".image-style");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });

  tl.from(
    targettop,
    {
      x: "-20vw",
      ease: "Quint.easeOut",
      duration: 1
    },
    0
  );
  tl.from(
    targetbottom,
    {
      x: "20vw",
      ease: "Quint.easeOut",
      duration: 1
    },
    0
  );
});

// Get the plus icon element
var plusIcon = document.querySelector(".quantity--icon.is--plus");

// Get the minus icon element
var minusIcon = document.querySelector(".quantity--icon.is--minus");

// Get the input element
var quantityInput = document.querySelector(".cart--quantity");

// Add a click event listener to the plus icon
plusIcon.addEventListener("click", function () {
  // Increment the input value by 1
  quantityInput.value = parseInt(quantityInput.value) + 1;
});

// Add a click event listener to the minus icon
minusIcon.addEventListener("click", function () {
  // Get the current input value
  var currentValue = parseInt(quantityInput.value);

  // Only decrement if the current value is greater than 1
  if (currentValue > 1) {
    // Decrement the input value by 1
    quantityInput.value = currentValue - 1;
  }
});

var emailInput = document.getElementById("email-2");
var button = document.querySelector(".foter-form-button");

emailInput.addEventListener("input", function () {
  if (emailInput.value.trim() !== "") {
    button.classList.add("is--active");
  } else {
    button.classList.remove("is--active");
  }
});
