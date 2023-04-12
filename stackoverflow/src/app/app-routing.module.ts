import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user",loadChildren:()=>import('./modules/user/user.module').then((m) => m.UserModule)},
  {path:"question",loadChildren:()=>import('./modules/question/question.module').then((q)=>q.QuestionModule)},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
