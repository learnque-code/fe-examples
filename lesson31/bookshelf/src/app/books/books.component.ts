import { Component, OnInit } from '@angular/core';
import {Books} from "./books.type";
import {BooksService} from "./books.service";
import {Book} from "./book/book.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: Books = [];
  public book!: Book;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().then((books: Books) => {
      this.books = books;
    });
  }

  onBookSelect(book: Book) {
    console.log("Selected book: ", book);
    this.book = book;
  }
}
