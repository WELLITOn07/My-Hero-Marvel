import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map, debounceTime } from 'rxjs';
import { FindHeroService } from '../../services/find-hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  marvel: Array<any> = [];
  heroes: Array<string> = [];

  control = new FormControl;
  filHeroes?: Observable<string[]>;

  constructor(private findHeroService: FindHeroService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.filHeroes = this.control.valueChanges.pipe (
      startWith(''),
      map(val => this._filter(val))
    )
  }

  getCharacters() {
    this.findHeroService.getAllCharacters();
    this.marvel = this.findHeroService.marvel;
    this.heroes = this.findHeroService.heroes;
  };

  private _filter(val: string): string[] {
    const formatVal = val.toLocaleLowerCase();

    return this.heroes.filter(name => name.toLocaleLowerCase().indexOf(formatVal) === 0)
  };

  selected(heroe: string) {
    this.findHeroService.selectedHero =  '';
    this.findHeroService.selectedHero = heroe;
  };
}
