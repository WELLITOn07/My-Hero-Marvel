import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroComponent } from './features/home/components/my-hero/my-hero.component';

const routes: Routes = [
  {path:'' ,redirectTo: '/home' ,pathMatch: 'full'},
  {path: 'home', component: MyHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
