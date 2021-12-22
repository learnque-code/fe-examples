import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DogPageComponent} from "./animal/dog-page/dog-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {BookshelfComponent} from "./bookshelf/bookshelf.component";
import {LoginComponent} from "./login/login.component";
import {AuthenticateGuard} from "./login/authenticate.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'dog',
    component: DogPageComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: '',
    component: BookshelfComponent,
    canActivate: [AuthenticateGuard],
  },
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
