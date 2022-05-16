const row = document.getElementById("mobile-row");

function addProductCard(tag, brandName, productName, price) {
  var card = document.createElement("mobi-product-card");
  card.setCardAttributes(tag, brandName, productName, price);
  row.appendChild(card);
}

addProductCard(
  "samsung-galaxy-s22-ultra",
  "Samsung",
  "Galaxy S22 Ultra",
  "1135.00",
);
addProductCard(
  "samsung-galaxy-s22",
  "Samsung",
  "Galaxy S22",
  "769.00",
);
addProductCard(
  "apple-iphone-13-pro-max",
  "Apple",
  "iPhone 13 Pro Max",
  "1147.99",
);
addProductCard(
  "google-pixel-6",
  "Google",
  "Pixel 6",
  "597.00",
);
