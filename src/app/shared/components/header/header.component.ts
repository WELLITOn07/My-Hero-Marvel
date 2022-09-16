import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FindHeroService } from '../../services/find-hero.service';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  control = new FormControl;

  constructor(public findHeroService: FindHeroService) { }

  filterHeroes?: Observable<any>;

  ngOnInit(): void {
  }

  //-- BUSCANDO TODOS OS OBJETOS DA API COM O MESMO FILTRO DO INPUT (NOME DO HERÓI)
  heroInput: string = '';
  getCharacters() {
    if (this.control.value) {
      this.trim()
      this.filterHeroes = this.findHeroService.getAllCharacters(String(this.heroInput));
      this.filterHeroes.subscribe({
        next(el){
          return el
        },
        complete(){
        },
        error(msg) {
          console.log(`Erro: ${msg}`);
        }
      });
    } else {
      window.alert('Nenhum Herói selecionado!')
    }
  };

  //-- FUNÇÃO P/ REMOVER ESPAÇOS NA STRING
  trim() {
    return this.heroInput = this.control.value.replace(/\s/g, '');
  };

  //-- FUNÇÃO P/ RESETAR INPUT
  clear() {
    this.control.reset();
  };

};//end

