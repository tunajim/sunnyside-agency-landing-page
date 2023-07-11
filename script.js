const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const triangle = document.querySelector(".triangle");
const navLinks = document.getElementsByClassName("nav-link");

const arr = Array.from(navLinks);

// handle nav interactions

arr.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(e.target);
    document.body.style.overflow = "auto";
  });
});
console.log(arr);
hamburger.addEventListener("mouseup", toggleNav);

function toggleNav(e) {
  !nav.classList.contains("active")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  nav.classList.toggle("active");
  triangle.classList.toggle("active");

  setTimeout(() => {
    nav.classList.contains("active")
      ? document.addEventListener("mouseup", turnNavOff)
      : document.removeEventListener("mouseup", turnNavOff);
  }, 100);
}

// handle hover states for learn more anchors

let learnMoreLinks = document.getElementsByClassName("info-link");

learnMoreLinks = Array.from(learnMoreLinks);

learnMoreLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("mouseover", (e) => {
    console.log(e.target.children[1]);
    e.target.children[1].classList.add("active");
  });

  link.addEventListener("mouseout", (e) => {
    e.target.children[1].classList.remove("active");
  });
});

// handle social hover states

let socials = Array.from(document.getElementsByClassName("social"));

socials.forEach((social) => {
  social.addEventListener("mouseover", (e) => {
    e.target.firstChild.setAttribute(
      "src",
      `images/icon-${e.target.classList[1]}-hover.svg`
    );
  });

  social.addEventListener("mouseout", (e) => {
    e.target.firstChild.setAttribute(
      "src",
      `images/icon-${e.target.classList[1]}.svg`
    );
  });
});

function turnNavOff(e) {
  const isNavElem =
    e.target.classList.contains("nav-link") ||
    e.target.classList.contains("nav-links") ||
    e.target.classList.contains("contact-button");
  if (!isNavElem) {
    nav.classList.remove("active");
    triangle.classList.remove("active");
  }
  document.body.style.overflow = "auto";
}
