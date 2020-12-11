import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PLoginComponent} from "./p-login/p-login.component";
import {PListComponent} from "./p-list/p-list.component";


const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "p-login"},
  {path: "p-login", component: PLoginComponent},
  {path: "p-list", component: PListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
