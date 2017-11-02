import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifySearchService {

  constructor(private http: Http) { }

  searchTrack(query: string){
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');
    let queryURL: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryURL).map(res=>res.json());
  }

}
