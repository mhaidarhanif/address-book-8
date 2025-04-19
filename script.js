let contacts = [
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
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
ID: ${contact.id}
👤 Name: ${contact.name}
📧 Email: ${contact.email}
📞 Phone: ${contact.phone}
🎂 Age: ${contact.age} years old
📍 Address: ${contact.address}
`);
  }
}

function addContact(name, age, email, phone, address) {
  const lastContact = contacts[contacts.length - 1];
  const lastId = lastContact.id;
  const nextId = lastId + 1;

  const newContact = {
    id: nextId,
    name,
    age,
    email,
    phone,
    address,
  };

  contacts.push(newContact);
}

function searchContacts(keyword) {
  const foundContacts = contacts.filter((contact) => {
    if (contact.name.toLowerCase().includes(keyword.toLowerCase())) {
      return contact;
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

// addContact("Mark Zuck", 40, "mark@example.com", "+123", "Palo Alto, CA, USA");
// addContact("Bill Gates", 60, "bill@example.com", "+123", "Seattle, WA, USA");
// displayContacts();

const searchResults = searchContacts("dar");

console.log(searchResults);
