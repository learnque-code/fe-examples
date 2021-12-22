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

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  onBookSelect(book: Book) {
    console.log("Selected book: ", book);
  }
}
