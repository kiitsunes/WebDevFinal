var scoreS = 0;


document.getElementById('btn0').onclick = function(){
  clicky();}
  document.getElementById('btn1').onclick = function(){
  clicky();}
  document.getElementById('btn2').onclick = function(){
  clicky();}
  
  /*got lazy and didn't add a for loop for the btn class .click-area*/


function clicky() {
     scoreS += 1;
     scoreS.toString();
    document.getElementById('score').innerHTML = scoreS;
}
