import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakrComponent } from './pages/breakr/breakr.component';
import { HomeComponent } from './pages/home/home.component';
import { MostarComponent } from './pages/mostar/mostar.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'mostar/:id',component:MostarComponent},
  {path:'404',component:BreakrComponent},
  {path:'**',redirectTo:'404',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
