function myFunction() {
    for (var i=0; i < document.getElementsByClassName("apple").length; i++) {
      var n = Math.ceil(Math.random() * 9)+1;
      n.toString();
      document.getElementsByClassName("apple")[i].style.WebkitAnimationDuration = n + "s";
      document.getElementsByClassName("apple")[i].style.animationDuration = n + "s";
    }
    scoreS = 0;
    document.getElementById('score').innerHTML = scoreS;
}
