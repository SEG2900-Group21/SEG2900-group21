window.addEventListener('scroll', function(){
  var top = window.scrollY; //fetches the user's scroll position
  var maxTop = document.documentElement.scrollHeight - document.documentElement.clientHeight; //fetches the maximun scroll position
  console.log(maxTop);
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
 
/*
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
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  
  var obj = {};
  
  // Add obj to cart
  obj.addtoCart = function(name, price, count) {
    for(var mug in cart) {
      if(cart[mug].name === name) {
        cart[mug].count ++;
        saveCart();
        return;
      }
    }
    var mug = new Mug(name, price, count);
    cart.push(mug);
    saveCart();
  }
  // Counts items
  obj.countItems = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Deletes Mug
  obj.deleteMug = function(name) {
      for(var mug in cart) {
        if(cart[mug].name === name) {
          cart[mug].count --;
          if(cart[mug].count === 0) {
            cart.splice(mug, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Delete All
  obj.deleteAll = function(name) {
    for(var mug in cart) {
      if(cart[mug].name === name) {
        cart.splice(mug, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var mug in cart) {
      totalCount += cart[mug].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var mug in cart) {
      totalCart += cart[mug].price * cart[mug].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      mug = cart[i];
      copy = {};
      for(p in mug) {
        copy[p] = mug[p];

      }
      itemCopy.total = Number(mug.price * mug.count).toFixed(2);
      cartCopy.push(copy)
    }
    return cartCopy;
  }


  return obj;
})();



// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addtoCart(name, price, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>(" + cartArray[i].price + ")</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>" 
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.deleteAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.deleteMug(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addtoCart(name);x``
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.addtoCart(name, count);
  displayCart();
});

displayCart();
*/