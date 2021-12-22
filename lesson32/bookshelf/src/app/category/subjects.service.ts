import { Injectable } from '@angular/core';
import {Subjects} from "./subjects.type";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjects: Subjects = []

  constructor(private httpClient: HttpClient) { }

  getSubjects(): Promise<Subjects> {
    return this.httpClient.get<Subjects>(`${environment.apiUrl}/subjects`).toPromise();
  }
}
