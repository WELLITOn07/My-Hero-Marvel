import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeroComponent } from './components/my-hero/my-hero.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './components/pages/details/details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    MyHeroComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MyHeroComponent,
    DetailsComponent
  ]
})
export class HomeModule { }
