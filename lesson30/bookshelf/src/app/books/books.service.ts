import {Injectable} from '@angular/core';
import {Books} from "./books.type";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Books = [
    {
      "id": 1342,
      "authors": [
        {
          "birth_year": 1775,
          "death_year": 1817,
          "name": "Austen, Jane"
        }
      ],
      "bookshelves": [
        "Best Books Ever Listings",
        "Harvard Classics"
      ],
      "download_count": 45668,
      "formats": {
        "text/plain; charset=utf-8": "http://www.gutenberg.org/files/1342/1342-0.txt",
        "application/pdf": "http://www.gutenberg.org/files/1342/1342-pdf.pdf",
        "application/rdf+xml": "http://www.gutenberg.org/ebooks/1342.rdf",
        "application/x-mobipocket-ebook": "http://www.gutenberg.org/ebooks/1342.kindle.noimages",
        "application/epub+zip": "http://www.gutenberg.org/ebooks/1342.epub.images",
        "text/plain; charset=us-ascii": "http://www.gutenberg.org/files/1342/1342.txt",
        "text/html; charset=utf-8": "http://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
      },
      "languages": [
        "en"
      ],
      "media_type": "Text",
      "subjects": [
        "Fiction"
      ],
      "title": "Pride and Prejudice"
    },
    {
      "id": 33283,
      "authors": [
        {
          "birth_year": 1851,
          "death_year": 1916,
          "name": "Thompson, Silvanus P. (Silvanus Phillips)"
        }
      ],
      "bookshelves": [
        "Mathematics"
      ],
      "download_count": 24344,
      "formats": {
        "application/prs.tex": "http://www.gutenberg.org/files/33283/33283-t.zip",
        "application/rdf+xml": "http://www.gutenberg.org/ebooks/33283.rdf",
        "application/pdf": "http://www.gutenberg.org/files/33283/33283-pdf.pdf"
      },
      "languages": [
        "en"
      ],
      "media_type": "Text",
      "subjects": [
        "Fiction"
      ],
      "title": "Calculus Made Easy: Being a very-simplest introduction to those beautiful methods which are generally called by the terrifying names of the Differential Calculus and the Integral Calculus"
    }
  ];

  constructor() {
  }

  getBooks(): Books {
    return this.books;
  }
}
