import { Injectable } from '@angular/core';
import {Subjects} from "./subjects.type";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjects: Subjects = []

  constructor(private httpClient: HttpClient) { }

  getSubjects(): Observable<Subjects> {
    return this.httpClient.get<Subjects>(`${environment.apiUrl}/subjects`);
  }
}
