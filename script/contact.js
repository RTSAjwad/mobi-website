function validateForm() {
    var name = document.contactForm.contactName;
    var email = document.contactForm.contactEmail;
    var message = document.contactForm.contactMessage;
    
    if (name.value == "" || name.value == null) {
        alert("Name can't be blank");
        return false;
    }
    else if (email.value == "" || email.value == null) {
        alert("You need to include your email");
        return false;
    }
    else if (message.value == "" || message.value == null) {
        alert("You need to write a message");
        return false;
    }
  } 