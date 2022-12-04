// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import {map} from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class YoutubeService {
//   private url:string="https://www.googleapis.com/youtube/v3/search";
//   private api_key:string ="AIzaSyCGZ3pmNhpq6WZAZ2F4VgwSxC69zmMeidY";
//   private canal:string="UCWemrS4US198YJrInJm-l0Q";


//   constructor(private _http:HttpClient) { }

//   obtenerVideos(){
//     const parametros = new HttpParams().set('part', 'snippet'). set('channelId', this.canal).set('maxResults','10').set('key', this.api_key);
//     let vinculo=`${this.url}/search`;
//     return this._http.get(vinculo,{params:parametros}).pipe(map(resp=>resp));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map} from 'rxjs/operators'
// import { toUnicode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url:string="https://www.googleapis.com/youtube/v3";
  private apikey:string="AIzaSyDGoZy6oinwZX1NyJbUZK9Iv5Kz59DUNao";
  private canalId:string="UCWemrS4US198YJrInJm-l0Q";

  constructor(private _http:HttpClient) { }

  obtenerVideos(){
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canalId).set('maxResults', '10').set('order','date').set('key', this.apikey);
    let url = `${this.url}/search`;
    return this._http.get(url,{params:parametros}).pipe(map(resp => resp));
  
  }

}
