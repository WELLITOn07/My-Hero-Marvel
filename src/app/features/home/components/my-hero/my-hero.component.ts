import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { FindHeroService } from 'src/app/shared/services/find-hero.service';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {

  constructor(private findHeroService : FindHeroService) { }

  hero: string = '';

  ngOnInit(): void {
  }

  showDetails () {
     this.hero = this.findHeroService.selectedHero;
  }

}//end
