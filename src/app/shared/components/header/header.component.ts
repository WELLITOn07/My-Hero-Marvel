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
  showMenu: boolean = true;

  constructor(private findHeroService: FindHeroService) { }

  filterHeroes?: Observable<any>;

  ngOnInit(): void {
  }

  //-- BUSCANDO TODOS OS OBJETOS DA API COM O MESMO FILTRO DO INPUT (NOME DO HERÓI)
  getCharacters() {
    if (this.control.value) {
      this.trim(this.control.value)
      this.filterHeroes = this.findHeroService.getAllCharacters(String(this.control.value));
      this.filterHeroes.subscribe(element => element);
    } else {
      window.alert('Nenhum Herói selecionado!')
    }
  };

  //-- FUNÇÃO P/ REMOVER ESPAÇOS NA STRING
  trim(text: string) {
    return text.trim();
  };

  //-- FUNÇÃO P/ RESETAR INPUT
  clear() {
    this.control.reset();
  };
}
