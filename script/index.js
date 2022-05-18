const row = document.getElementById("samsung-s-row");

function addPhoneCard(tag, brandName, productName, price) {
  var card = document.createElement("mobi-product-card");
  card.setCardAttributes(tag, brandName, productName, price);
  row.appendChild(card);
}

addPhoneCard(
  "samsung-galaxy-s22-ultra",
  "Samsung",
  "Galaxy S22 Ultra",
  "1135.00",
);
addPhoneCard(
  "samsung-galaxy-s22-plus",
  "Samsung",
  "Galaxy S22 Plus",
  "929.00",
);
addPhoneCard(
  "samsung-galaxy-s22",
  "Samsung",
  "Galaxy S22",
  "769.00",
);
addPhoneCard(
  "samsung-galaxy-s21-fe",
  "Samsung",
  "Galaxy S21 FE",
  "550",
);
