import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHeroComponent } from './features/home/components/my-hero/my-hero.component';
import { DetailsComponent } from './features/home/components/pages/details/details.component';

const routes: Routes = [
  {path:'' ,redirectTo: '/home' ,pathMatch: 'full'},
  {path: 'home', component: MyHeroComponent},
  {path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
