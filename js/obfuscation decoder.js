// encoder:
// https://www.base64encode.org/

// decode email
//
//
var encEmail = "Y2hhbmloYW1idXJnZXJAZ21haWwuY29t";

// Decode the Base64 encoded email address
var decodedEmail = atob(encEmail);

// Update the element with the data-email attribute with the decoded email address
var elementWithDataEmail = document.querySelector("[data-email]");
elementWithDataEmail.textContent = decodedEmail;

// Update the <a> element href attribute with the mailto link
const Email = document.getElementsByClassName("email")[0];
Email.setAttribute("href", "mailto:" + decodedEmail);
Email.setAttribute("target", "_blank");
//
//

// decode phone
//
//
var encPhone = "MDc1ODYgMzc1OTQ4";

// Decode the Base64 encoded email address
var decodedPhone = atob(encPhone);

// Update the element with the data-email attribute with the decoded email address
var elementWithDataPhone = document.querySelector("[data-phone]");
elementWithDataPhone.textContent = decodedPhone;

// Update the <a> element href attribute with the mailto link
const Phone = document.getElementsByClassName("phone")[0];
Phone.setAttribute("href", "tel:" + decodedPhone);
Phone.setAttribute("target", "_blank");
//
//
