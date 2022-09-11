import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Information } from 'src/app/shared/models/information.model';
import { FindHeroService } from 'src/app/shared/services/find-hero.service';

@Component({
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {


  constructor(private router: Router, private findHeroService: FindHeroService) { }

  heroeDetail: Array<Information> = this.findHeroService.heroeDetail;

  ngOnInit(): void {
  }

  return() {
    this.router.navigateByUrl('home');
  }

  //--MÉTODO P/ NAVEGAR NAS PAGES
  navegateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
