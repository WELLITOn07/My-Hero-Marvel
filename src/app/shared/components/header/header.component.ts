import { Component, OnInit } from '@angular/core';
import { FindHeroService } from '../../services/find-hero.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  marvel: Array<string> = this.findHeroService.marvel;

  control = new FormControl();
  filHeroes?: Observable<string[]>;

  constructor(private findHeroService: FindHeroService) { }

  ngOnInit(): void {
    this.filHeroes = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string) {
    const formatVal = value.toLocaleLowerCase();

    return this.marvel.filter(heroe => heroe.toLocaleLowerCase().indexOf(formatVal) === 0);
  };
}
