import { Component, OnInit } from '@angular/core';
import { FindHeroService } from 'src/app/shared/services/find-hero.service';

@Component({
  selector: 'app-my-hero',
  templateUrl: './my-hero.component.html',
  styleUrls: ['./my-hero.component.scss']
})
export class MyHeroComponent implements OnInit {

  constructor(private findHeroService: FindHeroService) { }

  hero: Array<any> = [];
  heroName: string = '';
  heroDescription: string = '';
  heroImg: string = '';
  heroSeries: Array<string> = [];
  heroStories: Array<string> = [];
  showHero: boolean = false;

  ngOnInit(): void {
  }

  showDetails() {
    this.heroName = '';
    this.heroDescription = '';
    this.heroImg = '';
    this.heroSeries = [];
    this.heroStories = [];


    this.hero = this.findHeroService.selectedHero;
    this.hero = this.findHeroService.selectedHero;
    this.showHero = true;
    this.hero.forEach(element => {
      this.heroName = element.name
      this.heroDescription = element.description
      this.heroImg = element.thumbnail.path + '.' + element.thumbnail.extension

      for (let i = 0; i < element.series.items.length; i++) {
        this.heroSeries.push(element.series.items[i].name)
      }

      for (let i = 0; i < element.stories.items.length; i++) {
        this.heroStories.push(element.stories.items[i].name)
      }

    });
  }

}//end
