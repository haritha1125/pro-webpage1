import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ToolbarComponent } from './toolbar/toolbar.component';
const routes: Routes = [
  {path:"" ,redirectTo:"Home",pathMatch:"full"},
  {
    path:"Home",component:ToolbarComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
