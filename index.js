var score = 0;
var clickpower = 1;
var meeplingPrice = 15;
var mrmeepPrice = 100;
var meepmagePrice = 1000;
var totalmrmps = 0;
var totalmpmgs = 0;
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
  score += totalmrmps/75;
  score += totalmpmgs/5;
  document.getElementById("header").innerHTML = "$" + Math.round(score);
 }, 10);
};
function OneClick() {
 score += clickpower;
 document.getElementById("header").innerHTML = "$" + Math.round(score);
};
function meeplingUp() {
 if (score >= meeplingPrice) {
  clickpower ++;
  score -= meeplingPrice;
  meeplingPrice *= 1.5;
  document.getElementById("header").innerHTML = "$" + Math.round(score);
 };
};
function mrmeepUp() {
 if (score >= mrmeepPrice) {
  totalmrmps ++;
  score -= mrmeepPrice;
  mrmeepPrice *= 1.5;
  document.getElementById("header").innerHTML = "$" + Math.round(score);
 };
};
function meepmageUp() {
 if (score >= meepmagePrice) {
  totalmpmgs ++;
  score -= meepmagePrice;
  meepmagePrice *= 1.5;
  document.getElementById("header").innerHTML = "$" + Math.round(score);
 };
};
