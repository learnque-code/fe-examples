import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Books} from "./books.type";
import {BooksService} from "./books.service";
import {Book} from "./book/book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnChanges {
  public books: Books = [];
  public book!: Book;
  @Input()
  public bookSubject: string | null | undefined;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().then((books: Books) => {
      this.books = books;
    });
  }

  onBookSelect(book: Book) {
    this.book = book;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const bookSubject = changes['bookSubject'];
    if (!!bookSubject.currentValue && bookSubject.currentValue !== bookSubject.previousValue) {
      this.booksService.getBooksBySubject(bookSubject.currentValue).then(books => {
        this.books = books;
      });
    }
  }
}
