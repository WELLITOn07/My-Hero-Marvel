import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { Information } from '../models/information.model';

@Injectable({
  providedIn: 'root'
})
export class FindHeroService {
  //--VÁRIAVEL USADA P/ ESCONDER HEADER P/ MOBILE
  showHeader: boolean = true;
  //--VÁRIAVEL P/ TODOS OS HERÓIS FILTRADOS
  heroes: Array<Hero> = [];
  //--VÁRIAVEL P/ O HERÓI SELECIONADO (VER OS DETALHES)
  heroeDetail: Array<Information> = [];
  timeStamp = '1662776122';
  apiKey = 'ff72b78ea4adee66118597026a8eecb8';
  md5 = 'a119d68c74bbaa40c900b10a298152a3';

  constructor(private http: HttpClient) { }

  //-- CONSUMINDO API DA MARVEL --//
  getAllCharacters(hero: string): Observable<any> {
    this.heroes.length = 0;
    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${hero}&ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}`).pipe(map((data: any) => data)).pipe(map((element: any) => {
      //--JOGANDO OS VALORES NA ARRAY
      for (let i = 0; i < element.data.results.length; i++) {
        this.heroes.push({ name: element.data.results[i].name, id: element.data.results[i].id, img: element.data.results[i].thumbnail.path, extension: element.data.results[i].thumbnail.extension })
      }
    }))
  };

  getHeroDetails(id: number): Observable<any> {
    this.heroeDetail.length = 0;
    return this.http.get<any>(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${this.timeStamp}&apikey=${this.apiKey}&hash=${this.md5}`).pipe(map((element: any) => {
      //--JOGANDO OS VALORES NA ARRAY
      for (let i = 0; i < element.data.results.length; i++) {
        this.heroeDetail.push({ name: element.data.results[i].name, description: element.data.results[i].description, img: element.data.results[i].thumbnail.path, extension: element.data.results[i].thumbnail.extension, series: element.data.results[i].series.items[i].name, stories: element.data.results[i].stories.items[i].name })
      }
      console.log(this.heroeDetail);
    }))
  };

}//end
