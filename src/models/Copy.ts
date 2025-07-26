import { AbstractBook } from './AbstractBook';

export class Copy {
  private book: AbstractBook;
  private isAvailable: boolean;

  constructor(book: AbstractBook) {
    this.book = book;
    this.isAvailable = true;
  }

  getBook(): AbstractBook {
    return this.book;
  }

  isCopyAvailable(): boolean {
    return this.isAvailable;
  }

  markAsBorrowed(): void {
    this.isAvailable = false;
  }

  markAsReturned(): void {
    this.isAvailable = true;
  }
}
