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


//Shopping cart part
//show cart
(function(){//imediately invoked function
    const cartInfo = document.getElementById(cart-info);// cart-info is supposed to be the the id of the cart info container that hold what's in the cart
    const cart =document.getElementById(cart); // cart is supposed tp be the id of the cart button
    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');// when cart has the class of show-cart it means that the cart can now be shown


    })

})();

// add items to the cart
(function(){
    const addCartBtn=document.querySelectorAll('addToCart'); //addToCart is supposed to be the name of the add to cart button
    addCartBtn.forEach(function(btn){
        btn.addEventListener('click',function(event){
           // console.log(event.target);
           if (event.target.parentElement.classList.contains('addToCart')){ // this condition could be removed depending on how the add button is coded 
            let path = event.target.parentElement.previousElementSibling.src; // coding it this way assumes that the way to diffrentiate between images would be the name of the img src
            let pos=fullPath.indexof('img')+4; // reducing the string to where only the image name is there instead of this super longer path   
            let imgName= fullPath.slice(pos);  // i want to keep only the name of the image incase there is gonna be a mini pic of the mug in the shopping cart
            const item ={};
            item.img='img-cart${imgName}';//img-cart is the folder where there would be the mini images for the cart

           }

        })
    })

})()
