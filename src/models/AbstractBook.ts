export abstract class AbstractBook {
  protected title: string;
  protected year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  abstract getDescription(): string;

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }
}
