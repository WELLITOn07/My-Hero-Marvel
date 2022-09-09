import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeroComponent } from './components/my-hero/my-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MyHeroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MyHeroComponent,
  ]
})
export class HomeModule { }
