import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FindHeroService } from '../../services/find-hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  control = new FormControl;

  constructor(private findHeroService: FindHeroService) { }

  filterHeroes?: Observable<any>;

  ngOnInit(): void {
  }

  //-- BUSCANDO TODOS OS OBJETOS DA API COM O MESMO FILTRO DO INPUT (NOME DO HERÓI)
  getCharacters() {
    if (this.control.value) {
      this.filterHeroes = this.findHeroService.getAllCharacters(String(this.control.value));
      this.filterHeroes.subscribe(element => element);
    } else {
      window.alert('Nenhum Herói selecionado!')
    }
  };
  clear() {
    this.control.reset();
  };
}
