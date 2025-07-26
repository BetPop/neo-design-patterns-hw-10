import { AbstractBook } from './AbstractBook';
import { Author } from './Author';

export class Book extends AbstractBook {
  private author: Author;

  constructor(title: string, year: number, author: Author) {
    super(title, year);
    this.author = author;
    author.addBook(this);
  }

  getAuthor(): Author {
    return this.author;
  }

  getDescription(): string {
    return `Physical book "${this.title}" by ${this.author.getName()} (${this.year})`;
  }
}
