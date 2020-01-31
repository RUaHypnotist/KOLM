var score = 0;
var clickpower = 1;
function OneClick() {
  score += clickpower;
  document.getElementById("header").innerHTML = "$" + score; 
};

function initScore(){
  document.getElementById("header").innerHTML = "$" + score; 
};
