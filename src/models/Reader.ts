import { Copy } from './Copy';

export class Reader {
  private id: string;
  private name: string;
  private borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  borrowCopy(copy: Copy): void {
    this.borrowedCopies.push(copy);
  }

  returnCopy(copy: Copy): void {
    this.borrowedCopies = this.borrowedCopies.filter(c => c !== copy);
  }

  getBorrowedCopies(): Copy[] {
    return this.borrowedCopies;
  }
}
