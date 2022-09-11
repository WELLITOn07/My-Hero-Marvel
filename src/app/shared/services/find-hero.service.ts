import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class FindHeroService {
  heroes: Array<Hero> = [];
  allCharacters?: Observable<any>;
  timeStamp = '1662776122';
  apiKey = 'ff72b78ea4adee66118597026a8eecb8';
  md5 = 'a119d68c74bbaa40c900b10a298152a3';

  constructor(private http: HttpClient) { }

  //-- CONSUMINDO API DA MARVEL --//
  getAllCharacters(hero: string): Observable<any> {
    this.heroes.length = 0;
    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${hero}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}`).pipe(map((data: any) => data)).pipe(map((element: any) => {
      for (let i = 0; i < element.data.results.length; i++) {
        this.heroes.push({ name: element.data.results[i].name, id: element.data.results[i].id, img: element.data.results[i].thumbnail.path, extension: element.data.results[i].thumbnail.extension })
      }
    }))
  };

}//end
