import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FindHeroService } from '../../services/find-hero.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  control = new FormControl;

  constructor(private findHeroService: FindHeroService) { }

  ngOnInit(): void {
  }

  getCharacters() {
    if (this.control.value) {
      this.findHeroService.allCharacters = this.findHeroService.getAllCharacters(String(this.control.value));
      this.findHeroService.allCharacters.subscribe(element => element)
    } else {
      window.alert('Nenhum Herói selecionado!')
    }
  };
  clear() {
    this.control.reset();
  };
}
