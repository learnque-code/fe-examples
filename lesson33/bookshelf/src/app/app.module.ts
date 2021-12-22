import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DogComponent} from './animal/dog/dog.component';
import {HeaderComponent} from './header/header.component';
import {CategoryComponent} from './category/category.component';
import {BooksComponent} from './books/books.component';
import {BookComponent} from './books/book/book.component';
import {JoinmastersPipe} from './animal/dog/joinmasters.pipe';
import {JoinauthorsPipe} from './books/joinauthors.pipe';
import {DogRandomComponent} from './animal/dog-random/dog-random.component';
import {HttpClientModule} from "@angular/common/http";
import { DogFormComponent } from './animal/dog-form/dog-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DogPageComponent } from './animal/dog-page/dog-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    HeaderComponent,
    CategoryComponent,
    BooksComponent,
    BookComponent,
    JoinmastersPipe,
    JoinauthorsPipe,
    DogRandomComponent,
    DogFormComponent,
    DogPageComponent,
    NotFoundPageComponent,
    BookshelfComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
