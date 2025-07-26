import { Copy } from '../models/Copy';
import { Reader } from '../models/Reader';

export class BorrowService {
  borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }

    copy.markAsBorrowed();
    reader.borrowCopy(copy);
    return true;
  }

  returnBook(reader: Reader, copy: Copy): void {
    copy.markAsReturned();
    reader.returnCopy(copy);
  }
}
