import {Injectable} from '@angular/core';
import {Books} from "./books.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Books = [];

  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Observable<Books> {
    return this.httpClient.get<Books>(`${environment.apiUrl}/books`);
  }

  getBooksBySubject(subject: string): Observable<Books> {
    return this.httpClient.get<Books>(`${environment.apiUrl}/books?subjects_like=${subject}`);
  }
}
