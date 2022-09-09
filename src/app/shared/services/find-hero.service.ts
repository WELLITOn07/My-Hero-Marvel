import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindHeroService {

  marvel: Array<string> = ['Welliton', 'Caio'];
  selectedHero: string = '';

  constructor() {}
}
