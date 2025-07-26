import { Book } from './Book';
import { Author } from './Author';

export class EBook extends Book {
  private url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this.url = url;
  }

  getDescription(): string {
    return `E-book "${this.getTitle()}" by ${this.getAuthor().getName()} (${this.getYear()}) - Available at: ${this.url}`;
  }

  getUrl(): string {
    return this.url;
  }
}
