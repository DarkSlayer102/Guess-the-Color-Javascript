

const win  = "YOU WONNN!!!!";

console.log(win);


function myFunction(){
    const winner = document.getElementById("winner");
    winner.style.animation = "mymove 2s 2";
}


winner.addEventListener("animationstart", mySFunction); /* start function */
winner.addEventListener("animationiteration", myRFunction); /* repeat function */
winner.addEventListener("animationend", myEFunction); 


function mySFunction() {
  this.innerHTML = "YOU WONNNNN!!!!!";
  this.style.color = "blue";
}
function myRFunction() {
  this.innerHTML = "YOU WONNNNN!!!!!";
  this.style.color = "darkred";
}
function myEFunction() {
  this.innerHTML = "YOU WONNNNN!!!!!";
  this.style.color = "pink";
}
