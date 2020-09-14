// **** Hamburger Menu nav bar display toggle function***//
let menuIcon = document.querySelector(".menu")
menuIcon.addEventListener("click", function() {
    let navList = document.querySelector("nav ul")
     navList.classList.toggle("mobile-menu")
})


// The data/time we want to countdown to
let startDate = new Date("Sep 01, 2019 23:59:59").getTime()

// Run myfunc every second
let increaseTime = setInterval(function() {

let now = new Date().getTime()
let timesince = now - startDate
    
// Calculating the days, hours, minutes and seconds left
let days = Math.floor(timesince / (1000 * 60 * 60 * 24))
let hours = Math.floor((timesince % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
let minutes = Math.floor((timesince % (1000 * 60 * 60)) / (1000 * 60))
let seconds = Math.floor((timesince % (1000 * 60)) / 1000)
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days + " days"
document.getElementById("hours").innerHTML = hours + " hours" 
document.getElementById("mins").innerHTML = minutes + " minutes" 
document.getElementById("secs").innerHTML = seconds + " seconds" 
}, 1000)

// ££££££££££ for WAKING WATCH ££££££££££££££££ //
// function to add commas to a number
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// The data/time we want to countdown to
let wakingWatchBegan = new Date("Jun 24, 2020 23:59:59").getTime()

// Run function every second
let increaseCost = setInterval(function() {

let present = new Date().getTime()
let timeelapsed = present - wakingWatchBegan
    
// // Calculating the hours, minutes and seconds elapsed and cost per
let monthPrice = (timeelapsed / (1000 * 60 * 60 * 24)) * 1127
let flatPrice = (timeelapsed / (1000 * 60 * 60 * 24)) * 15.65

let monthRound = (Math.round((monthPrice + Number.EPSILON) * 100) / 100).toFixed(2)
let flatRound = (Math.round((flatPrice + Number.EPSILON) * 100) / 100).toFixed(2)

// Result is output to the specific element
document.getElementById("cost").innerHTML = "£" + numberWithCommas(monthRound)
document.getElementById("flat-cost").innerHTML = "£" + numberWithCommas(flatRound) + " (per flat)" 

}, 1000)


// Global variables for Zenith close building //
const body = document.querySelector("body")


//*************** Floor 15 Functions *************//
const fifteenBtn = document.querySelector("#fifteen-btn")
const imgFifteen = document.querySelector("#fifteen-img")
const hxFifteen = document.querySelector("#fifteen-hx")
const fifteen = document.querySelector(".fifteen")
const p15 = document.querySelector(".p15")

fifteenBtn.addEventListener("click", function() {
    p15.classList.toggle("show-p15")
    fifteen.classList.toggle("show-fifteen")
    imgFifteen.classList.toggle("fifteen-img")
    hxFifteen.classList.toggle("fifteen-hx")
    fifteenBtn.classList.toggle("hover")
})

//*************** Floor 14 Functions *************//
const fourteenBtn = document.querySelector("#fourteen-btn")
const imgFourteen = document.querySelector("#fourteen-img")
const hxFourteen = document.querySelector("#fourteen-hx")
const fourteen = document.querySelector(".fourteen")
const p14 = document.querySelector(".p14")

fourteenBtn.addEventListener("click", function() {
    p14.classList.toggle("show-p14")
    fourteen.classList.toggle("show-fourteen")
    imgFourteen.classList.toggle("fourteen-img")
    hxFourteen.classList.toggle("fourteen-hx")
    fourteenBtn.classList.toggle("hover")
})

//*************** Floor 13 Functions *************//
const thirteenBtn = document.querySelector("#thirteen-btn")
const imgThirteen = document.querySelector("#thirteen-img")
const hxThirteen = document.querySelector("#thirteen-hx")
const thirteen = document.querySelector(".thirteen")
const p13 = document.querySelector(".p13")
 
thirteenBtn.addEventListener("click", function() {
    p13.classList.toggle("show-p13")
    thirteen.classList.toggle("show-thirteen")
    imgThirteen.classList.toggle("thirteen-img")
    hxThirteen.classList.toggle("thirteen-hx")
    thirteenBtn.classList.toggle("hover")
}) 

//*************** Floor 12 Functions *************//
const twelveBtn = document.querySelector("#twelve-btn")
const imgTwelve = document.querySelector("#twelve-img")
const hxTwelve = document.querySelector("#twelve-hx")
const twelve = document.querySelector(".twelve")
const p12 = document.querySelector(".p12")
 
twelveBtn.addEventListener("click", function() {
    p12.classList.toggle("show-p12")
    twelve.classList.toggle("show-twelve")
    imgTwelve.classList.toggle("twelve-img")
    hxTwelve.classList.toggle("twelve-hx")
    twelveBtn.classList.toggle("hover")
})

//************************************************//
//*************** Floor 11 Functions *************//
//************************************************//
/* const expandEleven = document.querySelector("#eleven-btn")
const imgEleven = document.querySelector(".eleven-img")
const eleven = document.querySelector(".eleven")
const p11 = document.querySelector(".p11")
 
expandEleven.addEventListener("click", function() {
    if (imgEleven.style.height === "60px") {
        p11.classList.add("show-p11")
        eleven.classList.add("show-eleven")
        eleven.style.zIndex = "5"
        imgEleven.style.height = "100px"
        hover.classList.remove("hover")
    } else {
        p11.classList.remove("show-p11")
        eleven.classList.remove("show-eleven")
        eleven.style.zIndex = "0"
        imgEleven.style.height = "60px"
        hover.classList.add("hover")
    }
}) */
