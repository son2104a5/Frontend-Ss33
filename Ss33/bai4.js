class Book{
    constructor(title, author, publishYear){
        this.title = title;
        this.author = author;
        this.publishYear = publishYear;
    }
    displayBooks() {
        console.log('title:' ,this.title);
        console.log('author:' ,this.author);
        console.log('publishYear:' ,this.publishYear);
        console.log('----------------------------');
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
        console.log('Sách trên kệ gồm:')
        this.books.forEach((book) => {
            book.displayBooks()
        });
    }
}

let book1 = new Book("Đắc nhân tâm", "Dale Carnegie", 1936);
let book2 = new Book("Doraemon", "Fujiko F. Fujio", 1970);

let bookCase = new Library();

bookCase.addBooks(book1);
bookCase.addBooks(book2);

bookCase.displayLibraries();

