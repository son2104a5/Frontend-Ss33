let phoneBox = {
    contact1: {
        name: `Alice`,
        phone: `0123-456-789`,
        email: `alice@example.com`,
    },
    contact2: {
        name: `Bob`,
        phone: `0987-654-321`,
        email: `bob@example.com`,
    }
}

for (let key in phoneBox) {
    console.log('Tên:', phoneBox[key].name);
    console.log('Điện thoại:', phoneBox[key].phone);
    console.log('Email:', phoneBox[key].email);
    console.log('------------------------');
}