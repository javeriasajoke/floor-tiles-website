

//animation when vieweport!!!!!!

const imgg = document.querySelector(".sec3-imgg")

const img = document.querySelector(".section2-img3")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("addclasss")
    }
  })
}
const options = {}

const myObserver = new IntersectionObserver(callback, options)
myObserver.observe(img)
myObserver.observe(imgg)

const divv = document.querySelector(".section2-img1")

const callbackk = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("addclasss2")
    }
  })
}
const optionss = {}

const myObserverr = new IntersectionObserver(callbackk, optionss)
myObserverr.observe(divv)


//fixed menu code
window.onscroll = function() {myFunction()};
window.onscroll = function() {myFunctionn()};

// Get the header
var header = document.getElementsByClassName("navigation");

var info = document.getElementsByClassName("s-infoo");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function myFunctionn() {
  if (window.pageYOffset > sticky) {
    info.classList.add("sticky");
  } else {
    info.classList.remove("sticky");
  }
}

