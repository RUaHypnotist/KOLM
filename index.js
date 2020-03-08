var score = 0;
var clickpower = 1;
var meeplingPrice = 15;
var mrmeepPrice = 100;
var meepmagePrice = 1000;
function initScore() {
 document.getElementById("header").innerHTML = "$" + score;
 setInterval(function(){
  if (score >= meeplingPrice) {
   document.getElementById("mplingupbtn").style.filter = "brightness(100%)";
  } else {
   document.getElementById("mplingupbtn").style.filter = "brightness(50%)"
  };
  if (score >= mrmeepPrice) {
   document.getElementById("mrmpupbtn").style.filter = "brightness(100%)";
  } else{
   document.getElementById("mrmpupbtn").style.filter = "brightness(50%)"
  };
  if (score >= meepmagePrice) {
   document.getElementById("mpmageupbtn").style.filter = "brightness(100%)";
  } else {
   document.getElementById("mpmageupbtn").style.filter = "brightness(50%)"
  };
 }, 10);
};
function OneClick() {
 score += clickpower;
 document.getElementById("header").innerHTML = "$" + score;
};