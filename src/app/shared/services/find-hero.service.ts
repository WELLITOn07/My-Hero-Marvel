import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindHeroService {

  //-- SALVAR DADOS DA API --//
  marvel: Array<any> = [];
  heroes: Array<string> = [];
  selectedHero: string = '';

  timeStamp = '1662776122';
  apiKey = 'ff72b78ea4adee66118597026a8eecb8';
  md5 = 'a119d68c74bbaa40c900b10a298152a3';

  constructor(private http: HttpClient) { }

  //-- CONSUMINDO API DA MARVEL --//
  getAllCharacters() {
    const http = this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}`).pipe(map((data: any) => data.data.results))
    http.subscribe(element => {
      for (let i = 0; i < element.length; i++) {
        this.marvel.push(element[i])
        this.heroes.push(element[i].name)
      }
    })
  }
}//end
