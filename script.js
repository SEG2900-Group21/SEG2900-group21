window.addEventListener('scroll', function(){
  var top = window.scrollY; //fetches the user's scroll position
  var maxTop = window.scrollMaxY; //fetches the maximun scroll position
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


//50 to 62.5 <-- ember

//5 to 60    <-- us