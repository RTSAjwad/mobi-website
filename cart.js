class MobiCartCard extends HTMLElement {
  constructor() {
    super();
  }
  addCardInfo(itemInfo) {
    this.tag = itemInfo.tag;
    this.brandName = itemInfo.brandName;
    this.productName = itemInfo.productName;
    this.price = itemInfo.price;
    this.imageName = itemInfo.imageName;
    this.amount = itemInfo.amount;
    this.itemSubtotal = (Number(this.price) * Number(this.amount)).toFixed(2);
  }
  connectedCallback() {
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
      var cart = JSON.parse(sessionStorage.getItem("cart"));
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].tag == this.tag) {
          cart.splice(i, 1);
          sessionStorage.setItem("cart", JSON.stringify(cart));
        }
      }
      updateSubtotal();
      this.remove();
    });

    var inputElement = this.getElementsByTagName("input")[0];
    var priceElement = this.getElementsByClassName("price")[0];
    inputElement.addEventListener("input", (event) => {
      var amount = inputElement.value;
      var cart = JSON.parse(sessionStorage.getItem("cart"));
      if (amount == 0) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].tag == this.tag) {
            cart.splice(i, 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        this.remove();
      }
      else {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].tag == this.tag) {
            cart[i].amount = amount
            sessionStorage.setItem("cart", JSON.stringify(cart));
          }
        }
        var totalItemPrice = this.price * amount
        priceElement.innerHTML = `£${(totalItemPrice).toFixed(2)}`;
      }
      updateSubtotal();
    })
  }
}
customElements.define("mobi-cart-card", MobiCartCard);

//get the row from the document
const row = document.getElementById("cart-item-row");
cart = JSON.parse(sessionStorage.getItem("cart"));
//create a card

for (let i = 0; i < cart.length; i++) {
  card = document.createElement("mobi-cart-card");
  cardInfo = cart[i];
  card.addCardInfo(cardInfo);
  row.appendChild(card);
}

function updateSubtotal() {
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
updateSubtotal();