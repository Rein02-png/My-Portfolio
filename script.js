/*------------ contact form ----------*/

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    contactMessage.style.color = "#facc15";
    contactMessage.textContent = "Sending message...";

    emailjs.send(
  "service_f9ga13c",
  "template_j91ib18",
  {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
)
    .then(() => {
      contactMessage.style.color = "#22c55e";
      contactMessage.textContent = "✅ Message sent successfully!";

      contactForm.reset();

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
    })
 .catch((error) => {
  console.log("EmailJS Error:", error);
  alert(JSON.stringify(error));

  contactMessage.style.color = "#ef4444";
  contactMessage.textContent = error.text || error.message || "Failed to send message.";
});
  });
}