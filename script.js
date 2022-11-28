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
var shoppingCart = (function() {
  cart = [];
  
  // Mug Constructor
  function Mug(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Saving  the cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Loading the cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
});

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
} // Would've expanded the function to be able to save and display the diffrent products in the shopping cart if I continued with this project.

//login function
function login(){
  if (document.getElementById("emailInput").value == ''||document.getElementById("passwordInput").value == ''){
    alert("Invalid login input. Make sure to enter a valid email adress and a strong password."); //won't work if one of the boxes are empty
  } else {
    localStorage.setItem("userEmail", document.getElementById("emailInput").value) //saves email (username)
    localStorage.setItem("userPassword", document.getElementById("passwordInput").value) //saves password (i know its not encrypted)
    window.location = "pricing.html";
  }
}

//logout function
function logout(){
  alert("Logged out successfully. Please close your browser to protect your sensitive information.");
  localStorage.setItem("userEmail", '');
  localStorage.setItem("userPassword", '');
  window.location = "index.html";
}

//checkout
function checkout(){
  alert("The payment system is still under construction.");
}

//displays user's email if they're already logged in
function initUser(){ //displays username (email) if user is logged in
  if (localStorage.getItem("userEmail")==''||localStorage.getItem("userEmail")==null) {
      document.getElementById("username").innerHTML = "<b>Not logged in</b>";
  } else {
      document.getElementById("username").innerHTML = "<b>Logged in as:</b> "+localStorage.getItem("userEmail");
  }
}