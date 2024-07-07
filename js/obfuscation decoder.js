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
// decode Whatsapp
//
//
var encWhatsapp = "MDc1ODYgMzc1OTQ4";

// Decode the Base64 encoded WhatsApp number
var decodedWhatsapp = atob(encWhatsapp);

// Remove spaces from the decoded WhatsApp number for href attribute
var whatsappWithoutSpaces = decodedWhatsapp.replace(/\s/g, "");

// Update the element with the data-whatsapp attribute with the decoded WhatsApp number
var elementWithDataWhatsapp = document.querySelector("[data-whatsapp]");
elementWithDataWhatsapp.textContent = decodedWhatsapp; // Retains original spacing

// Update the <a> element href attribute with the WhatsApp link (without spaces)
const Whatsapp = document.getElementsByClassName("whatsapp")[0];
Whatsapp.setAttribute("href", "https://wa.me/44" + whatsappWithoutSpaces);
Whatsapp.setAttribute("target", "_blank");
