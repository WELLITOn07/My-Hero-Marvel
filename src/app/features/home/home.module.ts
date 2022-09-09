import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeroComponent } from './components/my-hero/my-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroDetailsComponent } from './components/pages/hero-details/hero-details.component';



@NgModule({
  declarations: [
    MyHeroComponent,
    HeroDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyHeroComponent,
    HeroDetailsComponent
  ]
})
export class HomeModule { }
