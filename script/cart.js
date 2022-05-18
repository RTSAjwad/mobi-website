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

//We get the cart from session storage and parse it so we can use it as an array rather than plain text
cart = getCartAsArray();

//This for loop will loop through the cart array
//For every item in the cart array, we create a mobi-cart-card, add the items info to the card, the finally append the newly made card to the row to be displayed on page
for (let i = 0; i < cart.length; i++) {
  card = document.createElement("mobi-cart-card");
  card.addCardInfo(cart[i]);
  row.appendChild(card);
}

//This function updates the subtotal of all the items in the cart on screen
function updateCartPageSubtotal() {
  var cart = getCartAsArray();
    var subtotalElement = document.getElementsByClassName("subtotal")[0]
    subtotalElement.innerHTML = `£${getCartSubtotal()}`;
}

//We update the subtotal when the page loads
updateCartPageSubtotal();

//This function is excecuted when the card form is submitted at checkout and sends us to the sent page
function switchToSentPage() {
  window.location.href="./sent.html";
  emptyCart();
  return false
}