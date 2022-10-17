window.addEventListener('scroll', function(){
  var top = window.scrollY;
  var maxTop = window.scrollMaxY;
  var maxHeight = parseInt((getComputedStyle(document.querySelector(".menuBar"))).height);//fetches the height of le menu bar and rounds it
  updateThermoLiquid(top, maxTop, maxHeight);
});
  
function updateThermoLiquid(top, maxTop, height) {
  var perc = (top*height)/maxTop;
  perc = ((perc*72)/height)+"%";
  document.getElementById("thermoLiquid").style.height = perc;
}