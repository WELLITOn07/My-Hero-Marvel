import { Component, OnInit } from '@angular/core';
import { FindHeroService } from '../../services/find-hero.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public findHeroService: FindHeroService) { }

  ngOnInit(): void {
  }

  showMenu() {
    this.findHeroService.showHeader = true
  };

};//end
