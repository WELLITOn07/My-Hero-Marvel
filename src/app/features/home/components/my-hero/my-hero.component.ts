import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/shared/models/hero.model';
import { FindHeroService } from 'src/app/shared/services/find-hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {

  heroes: Array<Hero> = this.findHeroService.heroes;

  constructor(public findHeroService: FindHeroService, private router: Router) { }

  details?: Observable<any>;

  ngOnInit(): void {
  }

  //--PASSANDO E BUSCANDO (NA API) O ID DO HERÓI SELECIONADO
  heroDetails(heroId: number) {
    this.details = this.findHeroService.getHeroDetails(heroId);
    this.details.subscribe(element => element);
    this.findHeroService.showHeader = true;
    this.router.navigateByUrl('details');
  };

}//end
