const row = document.getElementById("row");

function addProductCard(tag, brandName, productName, price) {
  firstCard = document.createElement("mobi-product-card");
  firstCard.setCardAttributes(tag, brandName, productName, price);
  row.appendChild(firstCard);
}

addProductCard(
  "mobi-usb-c-charging-cable",
  "Mobi",
  "USB-C Charging Cable",
  "5.00",
);
addProductCard(
  "spigen-ultra-hybrid-iphone-13-case-crystal-clear",
  "Spigen",
  "Ultra Hybrid iPhone 13 Case - Crystal Clear",
  "12.73",
);
addProductCard(
  "samsung-galaxy-buds-2",
  "Samsung",
  "Galaxy Buds 2",
  "139.00",
);
