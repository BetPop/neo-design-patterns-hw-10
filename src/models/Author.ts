import { AbstractBook } from './AbstractBook';

export class Author {
  private name: string;
  private books: AbstractBook[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addBook(book: AbstractBook): void {
    this.books.push(book);
  }

  getName(): string {
    return this.name;
  }

  getBooks(): AbstractBook[] {
    return this.books;
  }
}
