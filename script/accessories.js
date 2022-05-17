// This constant variable stores the row in which we add our products cards
const row = document.getElementById("row");

// This function takes the relevant parameters for an accessory and automatically creates a card for it and puts it in our row
function addProductCard(tag, brandName, productName, price) {
  // Each time we use this function, we create a product card, set its attributes and append it to the row we grabbed earlier
  firstCard = document.createElement("mobi-product-card");
  firstCard.setCardAttributes(tag, brandName, productName, price);
  row.appendChild(firstCard);
}


// The following is the use of the function described previously. We have added 3 items.
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
