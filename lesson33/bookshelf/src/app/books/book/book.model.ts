import {Subjects} from "../../category/subjects.type";
import {Languages} from "./languages.type";
import {Authors} from "./authors.type";
import {Bookshelves} from "./bookshelves.type";
import {Formats} from "./formats.type";

export class Book {
  id: number | null = null;
  authors: Authors = [];
  bookshelves: Bookshelves = [];
  download_count: number = 0;
  formats: Formats = {};
  languages: Languages = [];
  media_type: string = "";
  subjects: Subjects = [];
  title: string = "";
}
