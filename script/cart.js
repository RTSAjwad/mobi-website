//This class acts as a template for cards on the cart page. Each card represents a single item in our cart.
class MobiCartCard extends HTMLElement {
  constructor() {
    super();
  }

  // This function takes an object as its paramater, the object will come from the array of objects in our cart which contains the information for a single item.
  addCardInfo(itemInfo) {
    // We take the information of that single item and also store it inside our cart card that we will display
    this.tag = itemInfo.tag;
    this.brandName = itemInfo.brandName;
    this.productName = itemInfo.productName;
    this.price = itemInfo.price;
    this.imageName = itemInfo.imageName;
    this.amount = itemInfo.amount;
    this.itemSubtotal = (Number(this.price) * Number(this.amount)).toFixed(2);
  }
  //This function is excecuted when this element is inserted into the DOM.
  connectedCallback() {
    //We set the html of the element and use the item info we got from the cart to be displayed on the card. 
    this.innerHTML = `
    <div class="col card shadow mb-3">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col-3 col-md-2">
            <img
              class="img-fluid"
              src="images/${this.tag}.jpg" 
              alt=""
            />
          </div>
          <div class="col-5 col-md-8 col-lg-7">
            <div class="row align-items-center">
              <div class="col-12 col-md-8">
                <h6 class="fw-light card-title">${this.brandName}</h6>
                <h5 clas="card-title">${this.productName}</h5>
              </div>
              <div class="col-12 col-md-12">
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <input
                      class="form-control"
                      min="0"
                      value="${this.amount}"
                      type="number"
                    />
                  </div>
                  <div class="col-12 col-sm-6">
                    <button class="btn btn-danger">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-2 col-lg-3">
            <p class="price card-text" style="text-align: center">£${this.itemSubtotal}</p>
          </div>
        </div>
      </div>
    </div>
    `;
    var removeButton = this.getElementsByClassName("btn-danger")[0];
    removeButton.addEventListener("click", (event) => {
      removeCartItemByTag(this.tag);
      updateCartPageSubtotal();
      this.remove();
    });

    var amountInput = this.getElementsByTagName("input")[0];
    var priceText = this.getElementsByClassName("price")[0];
    amountInput.addEventListener("input", (event) => {
      var amount = amountInput.value;
      if (amount == 0) {
        removeCartItemByTag(this.tag);
        this.remove();
      }
      else {
        updateCartItemAmountByTag(this.tag, amount);
        var totalItemPrice = this.price * amount
        priceText.innerHTML = `£${(totalItemPrice).toFixed(2)}`;
      }
      updateCartPageSubtotal();
    })
  }
}
customElements.define("mobi-cart-card", MobiCartCard);


//We get the row by id from the page that we want to add our cart cards to
const row = document.getElementById("cart-item-row");

//We get the cart from session storage
//We parse the cart so we can use it as an array rather than plain text
cart = JSON.parse(sessionStorage.getItem("cart"));
//We loop through the cart array and perform a set of instructions for each item object
for (let i = 0; i < cart.length; i++) {
  //We create a mobi-cart-card, add the item information from the current item in the cart array
  card = document.createElement("mobi-cart-card"); //We create a mobi-cart-card,
  card.addCardInfo(cart[i]); //We add the current items information to the card we have just created
  row.appendChild(card); //We have now created a card that represents the item and can append it to the row we got earlier to be displayed on page
}

function updateCartPageSubtotal() {
  var cart = JSON.parse(sessionStorage.getItem("cart"));
    var subtotalElement = document.getElementsByClassName("subtotal")[0]
    var subtotal = 0;
    for (let i = 0; i < cart.length; i++){
      var price = Number(cart[i].price);
      var amount = Number(cart[i].amount);
      var itemTotal = price * amount;
      subtotal = subtotal + itemTotal;
    }
    subtotalElement.innerHTML = `${subtotal.toFixed(2)}`;
}
updateCartPageSubtotal();