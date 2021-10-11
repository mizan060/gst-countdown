
const gntBtn =document.getElementById("randomButton");
gntBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() *1000000);
    document.getElementById("randomNumber").innerText = randomNumber;
})

Numbers = document.getElementById("randomNumber").innerText;

submitValue = document.getElementById("matchThis").Value;

// console.log(submitValue);
document.getElementById("SubmitBtn").onClick = console.log(submitValue);

// document.getElementById("SubmitBtn").addEventListener("click", function(){
//     if(parseInt(Numbers) === submitValue){
//         console.log("Pin Matched");
//     }else{
//         console.log("Pin not Matched");
//     }
    
// });
const liveTime = document.getElementById("live-time");
liveTime.innerText = Date()
// var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
console.log(countDownDate);

var countDownDate = new Date("Oct 17, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("live-time").innerHTML ="Ends in:"+ days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML ="EXPIRED";
  }
}, 1000);