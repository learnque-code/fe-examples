import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './animal/dog/dog.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { JoinmastersPipe } from './animal/dog/joinmasters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    HeaderComponent,
    CategoryComponent,
    BooksComponent,
    BookComponent,
    JoinmastersPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
