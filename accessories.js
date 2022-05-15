const row = document.getElementById("row");

function addProductCard(tag, brandName, productName, price, imageUrl) {
  firstCard = document.createElement("mobi-product-card");
  firstCard.setCardAttributes(tag, brandName, productName, price, imageUrl);
  row.appendChild(firstCard);
}

addProductCard(
  "mobi-usb-c-charging-cable",
  "Mobi",
  "USB-C Charging Cable",
  "5.00",
  "https://uk.static.webuy.com/product_images/Phones/Phone%20Accessories/SACCGENUSBC_l.jpg"
);
addProductCard(
  "spigen-ultra-hybrid-iphone-13-case-crystal-clear",
  "Spigen",
  "Ultra Hybrid iPhone 13 Case - Crystal Clear",
  "12.73",
  "https://m.media-amazon.com/images/I/717XCAponnL._AC_SX679_.jpg"
);
addProductCard(
  "samsung-galaxy-buds-2",
  "Samsung",
  "Galaxy Buds 2",
  "139.00",
  "https://m.media-amazon.com/images/I/51OHL+SzShL._AC_SX679_.jpg"
);
