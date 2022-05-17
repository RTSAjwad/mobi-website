class MobiNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top shadow">
          <div class="container">
                <a class="navbar-brand" href="index.html">
                <h1 class="navbar-brand">
                    <i class="bi bi-phone"></i>
                    Mobi
                </h1>
                </a>
                <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navlist"
                aria-controls="navlist"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navlist">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="mobiles.html">Mobile Phones</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="accessories.html">Accessories</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="cart.html">Cart</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        `;
    var title = document.getElementsByTagName("title")[0].id;
    var navLinks = this.getElementsByClassName("nav-link");
    if (title == "title-home") {
      navLinks[0].classList.add("active");
    } else if (title == "title-mobiles") {
      navLinks[1].classList.add("active");
    } else if (title == "title-accessories") {
      navLinks[2].classList.add("active");
    } else if (title == "title-about") {
      navLinks[3].classList.add("active");
    } else if (title == "title-contact") {
      navLinks[4].classList.add("active");
    } else if (title == "title-cart") {
      navLinks[5].classList.add("active");
    }
  }
}
class MobiFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer class="container border-top py-4 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <p class="text-muted fs-3 me-2"><i class="bi bi-phone"></i></p>
          <p class="text-muted">© 2022 Mobi Company, Inc</p>
        </div>
        <div class="">
          <ul class="text-muted d-flex justify-content-end fs-4">
            <i class="bi bi-facebook ms-2"></i>
            <i class="bi bi-twitter ms-2"></i>
            <i class="bi bi-instagram ms-2"></i>
          </ul>
        </div>
    </footer>`;
  }
}
class MobiProductCard extends HTMLElement {
  constructor() {
    super();
  }
  setCardAttributes(tag, brandName, productName, price, amount) {
    this.tag = tag;
    this.brandName = brandName;
    this.productName = productName;
    this.price = price;
    this.amount = amount;
  }
  connectedCallback() {
    this.innerHTML = `
    <div id="browse-card-col" class="col">
            <div class="card shadow mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-5 col-sm-12 card-body">
                  <img id="card-image"
                  src="images/${this.tag}.jpg"
                  class="card-image img-fluid position-relative top-50 start-50
                  translate-middle" alt="..." />
                </div>
                <div class="col-7 col-sm-12">
                  <div class="card-body">
                    <h6 id="brand-name" class="card-title fw-light mb-1">
                      ${this.brandName}
                    </h6>
                    <h5 id="phone-name" class="card-title">${this.productName}</h5>
                    <p class="card-text fw-light">Price</p>
                    <p id="monthly-price" class="card-text fw-bold fs-5">£${this.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;

    var inCart = isItemInCartByTag(this.tag);
    var insertTarget = this.getElementsByClassName("card-body")[1];
    if (inCart == false) {
      insertTarget.appendChild(this.createAddToCardElement());
    } else {
      insertTarget.appendChild(this.createInCardElement());
    }
  }

  createInCardElement() {
    var inCartElement = document.createElement("div");
    inCartElement.setAttribute("class", "row g-2 mt-2");
    inCartElement.innerHTML = `
        <div class="col-6">
          <input
            class="form-control"
            min="0"
            value=""
            type="number"
          />
        </div>
        <div class="col-6">
          <button class="btn btn-danger">Remove</button>
        </div>
      `;
    
    var removeButton = inCartElement.getElementsByTagName("button")[0];
    removeButton.addEventListener("click", (event) => {
      removeCartItemByTag(this.tag)

      var addToCart = this.createAddToCardElement();
      inCartElement.parentElement.appendChild(addToCart);
      inCartElement.remove();
    });

    var inputElement = inCartElement.getElementsByTagName("input")[0];
    inputElement.value = getCartItemAmountByTag(this.tag);
    inputElement.addEventListener("input", (event) => {
      var amount = inputElement.value;
      if (amount == 0) {
        removeCartItemByTag(this.tag);
        var addToCart = this.createAddToCardElement();
        inCartElement.parentElement.appendChild(addToCart);
        inCartElement.remove();
      }
      else {
        updateCartItemAmountByTag(this.tag, amount);
      }
    })
    return inCartElement;
  }

  createAddToCardElement() {
    var btn = document.createElement("button");
    btn.setAttribute("id", "add-to-cart");
    btn.setAttribute("class", "btn btn-primary my-2");
    btn.setAttribute("type", "button");
    btn.innerHTML = "Add To Cart";

    btn.addEventListener(
      "click",
      (event) => {
        addToCart(this.tag, this.brandName, this.productName, this.price);
        var button = this.getElementsByTagName("button")[0];

        var insertTarget = button.parentElement;
        var inCartText = this.createInCardElement();
        insertTarget.appendChild(inCartText);
        button.remove();
      },
      false
    );
    return btn;
  }
}
customElements.define("mobi-navbar", MobiNavbar);
customElements.define("mobi-footer", MobiFooter);
customElements.define("mobi-product-card", MobiProductCard);
