window.addEventListener('scroll', function(){
    var top = window.scrollY; //fetches the user's scroll position
    var maxTop = document.documentElement.scrollHeight - document.documentElement.clientHeight; //fetches the maximun scroll position
    var maxHeight = parseInt((getComputedStyle(document.querySelector(".menuBar"))).height);//fetches the height of the menu bar and rounds it
    updateThermoLiquid(top, maxTop, maxHeight); //updates the menu's liquid status
  });
    
  function updateThermoLiquid(top, maxTop, height) {
    var perc = (top*height)/maxTop; //finds the value of the scroll position on the maximum height
    perc = ((perc*72)/height); //finds the percentage of that value on 72 (just below the side of the menu container which is 75%)
    document.getElementById("thermoLiquid").style.height = perc+"%"; //updates the liquid's status
    celsius = (perc*50)/72; //calculating the percentage based on the degree range offered by the product
    document.getElementById("tempature").innerHTML = (parseInt(celsius+10))+"°C"; //updates tempature
}

//Shopping cart part
let increment= document.getElementById("add-to-cart");
let amount= document.getElementById("cartAmount");
let items=0;
let decrement= document.getElementById("remove-from-cart");
 
function addToCart(){
  amount.textContent=++items;
}
function removeFromCart(){
  if(items>0){
    amount.textContent=--items;
  }
}

//login function
function login(){
  localStorage.setItem("userEmail", document.getElementById("emailInput").value) //saves email (username)
  localStorage.setItem("userPassword", document.getElementById("passwordInput").value) //saves password (i know its not encrypted)
  window.location = "pricing.html";
}