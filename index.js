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
  if (totalmrmps > 0) {
    document.getElementById("mrmparmy").style.display = "block"
  } else {
    document.getElementById("mrmparmy").style.display = "none"
  };
  if (totalmpmgs > 0) {
    document.getElementById("mpmgarmy").style.display = "block"
  } else {
    document.getElementById("mpmgarmy").style.display = "none"
  };
  if (totalmgmps > 0) {
    document.getElementById("mgmparmy").style.display = "block"
  } else {
    document.getElementById("mgmparmy").style.display = "none"
  };
  if (totaldmnmps > 0) {
    document.getElementById("dmnmparmy").style.display = "block"
  } else {
    document.getElementById("dmnmparmy").style.display = "none"
  };
  if (totalmpgds > 0) {
    document.getElementById("mpgdarmy").style.display = "block"
  } else {
    document.getElementById("mpgdarmy").style.display = "none"
  };
  if (totalntmtrs > 0) {
    document.getElementById("ntmtrarmy").style.display = "block"
  } else {
    document.getElementById("ntmtrarmy").style.display = "none"
  };
  if (clickpower > 1) {
    document.getElementById("mplingupgrd").style.display = "block"
  } else {
    document.getElementById("mplingupgrd").style.display = "none"
  };
  if (totalmrmps > 0) {
    document.getElementById("mrmpupgrd").style.display = "block"
  } else {
    document.getElementById("mrmpupgrd").style.display = "none"
  };
  if (totalmpmgs > 0) {
    document.getElementById("mgmpupgrd").style.display = "block"
  } else {
    document.getElementById("mgmpupgrd").style.display = "none"
  };
  if (totalmgmps > 0) {
    document.getElementById("dmnmpupgrd").style.display = "block"
  } else {
    document.getElementById("dmnmpupgrd").style.display = "none"
  };
  if (totaldmnmps > 0) {
    document.getElementById("mpgdupgrd").style.display = "block"
  } else {
    document.getElementById("mpgdupgrd").style.display = "none"
  };
  if (totalmpgds > 0) {
    document.getElementById("ntmtrupgrd").style.display = "block"
  } else {
    document.getElementById("ntmtrupgrd").style.display = "none"
  };
  score += totalmrmps/100;
  score += totalmpmgs/15;
  score += totalmgmps*5;
  score += totaldmnmps*150;
  score += totalmpgds*10000;
  score += totalntmtrs*1000000;
  document.getElementById("mplingPrice").innerHTML = "$" + Math.round(meeplingPrice);
  document.getElementById("mrmpPrice").innerHTML = "$" + Math.round(mrmeepPrice);
  document.getElementById("mpmgPrice").innerHTML = "$" + Math.round(meepmagePrice);
  document.getElementById("mgmpPrice").innerHTML = "$" + Math.round(megameepPrice);
  document.getElementById("dmnmpPrice").innerHTML = "$" + Math.round(demonmeepPrice);
  document.getElementById("mpgdPrice").innerHTML = "$" + Math.round(meepgodPrice);
  document.getElementById("ntmtrmpPrice").innerHTML = "$" + Math.round(antimattermeepPrice);
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
