let allContacts = [
  {
    id: 1,
    name: "M Haidar Hanif",
    age: 30,
    email: "haidar@example.com",
    phone: "+62-851-0193029",
    address: "Bandung, Indonesia",
  },
  {
    id: 2,
    name: "Elon Musk",
    age: 55,
    email: "elon@example.com",
    phone: "+1-12121-0193029",
    address: "California, USA",
  },
  {
    id: 3,
    name: "Mark Zuckerberg",
    age: 45,
    email: "mark@example.com",
    phone: "+1-2329-0193029",
    address: "City, USA",
  },
];

function displayContacts() {
  allContacts.forEach((oneContact) => {
    console.log(`
      ID: ${oneContact.id}
      👤 Name: ${oneContact.name}
      📧 Email: ${oneContact.email}
      📞 Phone: ${oneContact.phone}
      🎂 Age: ${oneContact.age} years old
      📍 Address: ${oneContact.address}
      `);
  });
}

function addContact(contactData) {
  const lastContact = allContacts[allContacts.length - 1];
  const lastId = lastContact.id;
  const nextId = lastId + 1;

  allContacts.push({
    id: nextId,
    ...contactData,
  });
}

function searchContacts(keyword) {
  const foundContacts = allContacts.filter((oneContact) => {
    if (oneContact.name.toLowerCase().includes(keyword.toLowerCase())) {
      return oneContact;
    }
  });

  return foundContacts;
}

function deleteContact() {
  // ...
}

function updateContact() {
  // ...
}

function renderContacts() {
  const allContactsListElement = document.getElementById("all-contacts");

  allContactsListElement.innerHTML = allContacts
    .map((oneContact) => {
      return `<li>
    <h2>${oneContact.name}</h2>
    <p>${oneContact.email}</p>
    <p>${oneContact.phone}</p>
    <p>${oneContact.age} years old</p>
    <p>${oneContact.address}</p>
    </li>`;
    })
    .join("");
}

const contactFormElement = document.getElementById("contact-form");

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactFormElement);

  const newContactFormData = {
    name: String(formData.get("name")),
    age: Number(formData.get("age")),
    email: String(formData.get("email")),
    phone: String(formData.get("phone")),
    address: String(formData.get("address")),
  };

  addContact(newContactFormData);

  renderContacts();
});

// ---------------------------------
// Program
// ---------------------------------

renderContacts();
