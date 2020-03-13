var score = 0;
var clickpower = 1;
var meeplingPrice = 15;
var mrmeepPrice = 100;
var meepmagePrice = 1000;
var megameepPrice = 50000;
var demonmeepPrice = 100000;
var meepgodPrice = 500000;
var antimattermeepPrice = 1000000;
var totalmrmps = 0;
var totalmpmgs = 0;
var totalmgmps = 0;
var totaldmnmps = 0;
var totalmpgds = 0;
var totalntmtrs = 0;
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
  if (score >= megameepPrice) {
   document.getElementById("mgmpupbtn").style.filter = "brightness(100%)";
  } else {
   document.getElementById("mgmpupbtn").style.filter = "brightness(50%)"
  };
  if (score >= demonmeepPrice) {
   document.getElementById("dmnmpupbtn").style.filter = "brightness(100%)";
  } else {
   document.getElementById("dmnmpupbtn").style.filter = "brightness(50%)"
  };
  if (score >= meepgodPrice) {
   document.getElementById("mpgdupbtn").style.filter = "brightness(100%)";
  } else {
   document.getElementById("mpgdupbtn").style.filter = "brightness(50%)"
  };
  if (score >= antimattermeepPrice) {
   document.getElementById("ntmtrupbtn").style.filter = "brightness(100%)";
  } else {
   document.getElementById("ntmtrupbtn").style.filter = "brightness(50%)"
  };
  score += totalmrmps/100;
  score += totalmpmgs/15;
  score += totalmgmps*5;
  score += totaldmnmps*150;
  score += totalmpgds*10000;
  score += totalntmtrs*1000000;
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
 } else {
  document.getElementById("mrmpupbtn").style.filter = "brightness(50%)"
 };
};
function meepmageUp() {
 if (score >= meepmagePrice) {
  totalmpmgs ++;
  score -= meepmagePrice;
  meepmagePrice *= 1.5;
 } else {
  document.getElementById("mpmageupbtn").style.filter = "brightness(50%)"
 };
};
function megameepUp() {
 if (score >= meepmagePrice) {
  totalmgmps ++;
  score -= megameepPrice;
  megameepPrice *= 1.5;
 } else {
  document.getElementById("mgmpupbtn").style.filter = "brightness(50%)"
 };
};
function demonmeepUp() {
 if (score >= demonmeepPrice) {
  totaldmnmps ++;
  score -= demonmeepPrice;
  demonmeepPrice *= 1.5;
 } else {
  document.getElementById("dmnmpupbtn").style.filter = "brightness(50%)"
 };
};
function meepgodUp() {
 if (score >= meepgodPrice) {
  totalmpgds ++;
  score -= meepgodPrice;
  meepgodPrice *= 1.5;
 } else {
  document.getElementById("mpgdupbtn").style.filter = "brightness(50%)"
 };
};
function antimattermeepUp() {
 if (score >= antimattermeepPrice) {
  totalntmtrs ++;
  score -= antimattermeepPrice;
  antimattermeepPrice *= 1.5;
 } else {
  document.getElementById("ntmtrupbtn").style.filter = "brightness(50%)"
 };
};
