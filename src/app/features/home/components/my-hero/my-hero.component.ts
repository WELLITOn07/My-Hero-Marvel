import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/shared/models/hero.model';
import { FindHeroService } from 'src/app/shared/services/find-hero.service';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {

  heroes: Array<Hero> = this.findHeroService.heroes;

  constructor(private findHeroService: FindHeroService, private router: Router) { }


  ngOnInit(): void {
  }

  heroDetails(heroId: number) {
    this.findHeroService.allCharacters = this.findHeroService.getHeroDetails(heroId);
    this.findHeroService.allCharacters.subscribe(element => element);
    this.router.navigateByUrl('details');
    console.log(this.findHeroService.heroeDetail);
  };

}//end
