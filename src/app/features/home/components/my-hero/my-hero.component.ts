import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero.model';
import { FindHeroService } from 'src/app/shared/services/find-hero.service';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {

  heroes: Array<Hero> = this.findHeroService.heroes;

  constructor(private findHeroService: FindHeroService) { }

  ngOnInit(): void {
  }

  heroDetails(heroId: number) {
    console.log(heroId);
  };

}//end
