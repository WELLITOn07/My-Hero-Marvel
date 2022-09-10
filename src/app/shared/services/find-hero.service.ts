import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindHeroService {

  marvel: Array<any> = [];
  selectedHero: Array<any> = [];

  timeStamp = '1662776122';
  apiKey = 'ff72b78ea4adee66118597026a8eecb8';
  md5 = 'a119d68c74bbaa40c900b10a298152a3';

  constructor() { }

  getAllCharacters() {
    fetch (`https://gateway.marvel.com:443/v1/public/characters?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}`).then ((response) => {
      return response.json();
    }).then ((jsonParsed) => {
      for (let item of jsonParsed.data.results) {
        this.marvel.push(item)
      }
    })
  }
}
