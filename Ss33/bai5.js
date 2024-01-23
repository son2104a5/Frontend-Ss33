class Book{
    constructor(title, author, publishYear, isAvailable){
        this.title = title;
        this.author = author;
        this.publishYear = publishYear;
        this.isAvailable = isAvailable;
    }
    displayBooks() {
        console.log('title:' ,this.title);
        console.log('author:' ,this.author);
        console.log('publishYear:' ,this.publishYear);
        console.log('---------------------');
    }
    borrow(){
        if(this.isAvailable === true){
            console.log('Trạng thái: Vẫn còn');
        }else{
            console.log('Trạng thái: Đã cho mượn');
        }
    }
    returnBook(){
        if(this.isAvailable === false){
            console.log('Đã cho mượn');
        }else{
            console.log('Đã trả sách');
        }
    }
}

class Library{
    constructor(){
        this.books = [];
    }
    addBooks(book){
        this.books.push(book);
    }
    displayLibraries(){
        console.log('Sách:')
        this.books.forEach((book) => {
            book.displayBooks()
        });
    }
    isBookAvailable(){
        this.books.forEach((book) => {
            book.borrow()
        });
    }
    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (book.available) {
                book.available = false;
                console.log(`Bạn đã mượn cuốn sách "${title}" thành công.`);
            } else {
                console.log(`Xin lỗi, cuốn sách "${title}" hiện không khả dụng.`);
            }
        } else {
            console.log(`Xin lỗi, cuốn sách "${title}" không tồn tại trong thư viện.`);
        }
    }
    returnBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            if (!book.available) {
                book.available = true;
                console.log(`Bạn đã trả cuốn sách "${book.title}" thành công.`);
            } else {
                console.log(`Xin lỗi, cuốn sách "${book.title}" đã được trả trước đó.`);
            }
        } else {
            console.log(`Xin lỗi, cuốn sách "${title}" không tồn tại trong thư viện.`);
        }
    }
}

let book1 = new Book("Đắc nhân tâm", "Dale Carnegie", 1936, true);
let book2 = new Book("Doraemon", "Fujiko F. Fujio", 1970, true);

let bookCase = new Library();

bookCase.addBooks(book1);
bookCase.addBooks(book2);

bookCase.displayLibraries();
bookCase.isBookAvailable();

bookCase.borrowBook();
bookCase.returnBook();