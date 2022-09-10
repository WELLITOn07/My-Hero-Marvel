import { Component, OnInit } from '@angular/core';
import { FindHeroService } from '../../services/find-hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  marvel: Array<any> = [];

  constructor(private findHeroService: FindHeroService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.findHeroService.getAllCharacters();
    this.marvel = this.findHeroService.marvel;
  };

  selected(hero: object) {
    this.findHeroService.selectedHero = [];
    this.findHeroService.selectedHero.push(hero);
  };
}
