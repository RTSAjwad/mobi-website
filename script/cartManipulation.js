function removeCartItemByTag(tag) {
    //We get the cart array from session storage.
    //This returns plain text so we parse it so we can treat it as an array.
    var cart = JSON.parse(sessionStorage.getItem("cart"));

    //Loop through our cart array from beginning to end
    for (let i = 0; i < cart.length; i++) {
        //If the current cart item tag matches the one we want to remove then remove it from the cart array.
      if (cart[i].tag == tag) {
        cart.splice(i, 1);
        //The new cart array with the item removed is converted to plain text and added to sessionStorage, replacing the old one.
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    }
}
function addToCart(tag, brandName, productName, price){

    //We get the cart array from session storage.
    //This returns plain text so we parse it so we can treat it as an array.
    var cart = JSON.parse(sessionStorage.getItem("cart"));

    //This object stores an items data and will be added as an index in the cart array in session storage
    var itemJson = {
      tag: tag,
      brandName: brandName,
      productName: productName,
      price: price,
      amount: 1 
    };

    if (cart == null) { //If there is no cart array, lets create one and put the item in its first index
      var cart = [itemJson];
    } else { //If there is a cart array, add the item to the end of the array
      cart.push(itemJson);
    }

    //The new cart with the item added is converted to plain text and added to session storage, replacing the old one.
    sessionStorage.setItem("cart", JSON.stringify(cart));
}
function updateCartItemAmountByTag(tag, amount) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].tag == tag) {
          cart[i].amount = amount
          sessionStorage.setItem("cart", JSON.stringify(cart));
        }
    }
}
function getCartItemAmountByTag(tag) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].tag == tag) {
        return cart[i].amount
      }
    }
}
function isItemInCartByTag(tag) {
    var cart = JSON.parse(sessionStorage.getItem("cart"));

    var inCart = false;
    if (cart != null) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].tag == tag) {
          inCart = true;
        }
      }
    }

    return inCart;
}
function getCartSubtotal() {
    var cart = JSON.parse(sessionStorage.getItem("cart"));
    var subtotal = 0;
    for (let i = 0; i < cart.length; i++){
        var price = Number(cart[i].price);
        var amount = Number(cart[i].amount);
        var itemTotal = price * amount;
        subtotal = subtotal + itemTotal;
    }
    return subtotal.toFixed(2);
}