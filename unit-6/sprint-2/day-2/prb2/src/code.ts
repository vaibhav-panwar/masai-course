type BookType = "Fiction" | "Documentary" | "Educational";

export class Book {
section:BookType;
name:string;
constructor(section:BookType,name:string){
    this.name = name;
    this.section = section;
}
}

export class Section{
    name:BookType;
    books:Book[];
    constructor(name:BookType){
        this.name = name;
        this.books = [];
    }
    addBook(book:Book){
        this.books.push(book);
    }
}

export class Library{
    name:string;
    sections:Section[];
    constructor(name:string){
        this.name = name;
        this.sections = [];
    }
    addSection(section:Section){
        this.sections.push(section);
    }
}