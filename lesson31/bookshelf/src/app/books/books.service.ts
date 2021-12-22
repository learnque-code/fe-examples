import {Injectable} from '@angular/core';
import {Books} from "./books.type";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Books = [];

  constructor(private httpClient: HttpClient) {
  }

  getBooks(): Promise<Books> {
    return this.httpClient.get<Books>(`${environment.apiUrl}/books`).toPromise<Books>();
  }
}
