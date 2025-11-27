class Book {
    constructor(title, author, ISBN, isIssued=false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }
    issueBook() {
        if(!this.isIssued){ this.isIssued = true; console.log(`${this.title} issued successfully.`); }
        else console.log(`${this.title} is already issued.`);
    }
    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} returned successfully.`);
    }
}
const books = [
    new Book("Harry Potter", "J.K. Rowling", "HP001"),
    new Book("The Alchemist", "Paulo Coelho", "TA002"),
    new Book("Clean Code", "Robert Martin", "CC003")
];
console.log("Available Books:");
books.filter(book => !book.isIssued).forEach(book => console.log(book.title));
function issueBookByISBN(ISBN) {
    const book = books.find(b => b.ISBN===ISBN);
    if(book) book.issueBook();
    else console.log("Book not found.");
}
issueBookByISBN("HP001");