const row = document.getElementById("mobile-row");

function addPhoneCard(
  brandName,
  phoneName,
  monthlyPrice,
  upfrontPrice,
  imageUrl
) {
  var card = document.createElement("mobi-phone-card");
  card.setCardAttributes(
    brandName,
    phoneName,
    monthlyPrice,
    upfrontPrice,
    imageUrl
  );
  row.appendChild(card);
}

addPhoneCard(
  "Samsung",
  "Galaxy S22 Ultra",
  "63.00",
  "29.00",
  "samsung-galaxy-s22-ultra.jpg"
);
addPhoneCard(
  "Samsung",
  "Galaxy S22",
  "47.00",
  "0.00",
  "samsung-galaxy-s22.jpg"
);
addPhoneCard(
  "Apple",
  "iPhone 13 Pro Max",
  "58.99",
  "49.00",
  "apple-iphone-13-pro-max.jpg"
);
addPhoneCard("Google", "Pixel 6", "29.99", "0.00", "google-pixel-6.jpg");
addPhoneCard(
  "Samsung",
  "Galaxy S22 Ultra",
  "63.00",
  "29.00",
  "samsung-galaxy-s22-ultra.jpg"
);
addPhoneCard(
  "Samsung",
  "Galaxy S22",
  "47.00",
  "0.00",
  "samsung-galaxy-s22.jpg"
);
addPhoneCard(
  "Apple",
  "iPhone 13 Pro Max",
  "58.99",
  "49.00",
  "apple-iphone-13-pro-max.jpg"
);
addPhoneCard("Google", "Pixel 6", "29.99", "0.00", "google-pixel-6.jpg");
addPhoneCard(
  "Samsung",
  "Galaxy S22 Ultra",
  "63.00",
  "29.00",
  "samsung-galaxy-s22-ultra.jpg"
);
addPhoneCard(
  "Samsung",
  "Galaxy S22",
  "47.00",
  "0.00",
  "samsung-galaxy-s22.jpg"
);
addPhoneCard(
  "Apple",
  "iPhone 13 Pro Max",
  "58.99",
  "49.00",
  "apple-iphone-13-pro-max.jpg"
);
addPhoneCard("Google", "Pixel 6", "29.99", "0.00", "google-pixel-6.jpg");
