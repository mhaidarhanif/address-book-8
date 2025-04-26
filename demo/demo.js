const contactFormElement = document.getElementById("contact-form");

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactFormElement);
  console.log(formData.get("fullname"));
});
