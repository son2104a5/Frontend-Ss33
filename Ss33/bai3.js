let phoneBox = {
    contact1: {
        name: "Alice",
        phone: "0123-456-789",
        email: "alice@example.com",
        displayInfo: function(){
          return `
          Tên: ${phoneBox.contact1.name}
          Điện thoại: ${phoneBox.contact1.phone}
          Email: ${phoneBox.contact1.email}
          `;
        },
    },
    contact2: {
        name: "Bob",
        phone: "0987-654-321",
        email: "bob@example.com",
        displayInfo: function(){
          return `
          Tên: ${phoneBox.contact2.name}
          Điện thoại: ${phoneBox.contact2.phone}
          Email: ${phoneBox.contact2.email}
          `;
        },
    },
};

for (let key in phoneBox) {
    console.log(phoneBox[key].displayInfo());
    console.log('------------------------');
}