import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Http, Headers, RequestOptions, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

import { TrackComponent } from '../components/track/track.component';
import { SearchComponent } from '../components/search/search.component';

@Injectable()
export class SpotifySearchService {
  static BASE_URL = 'https://api.spotify.com/v1';
  static spotifyApiKey = 'putTheAuthorizationKeyHere';
  results: SearchComponent;

   constructor(private http: Http) {
   }

   query(URL: string, params?: Array<string>): Observable<any[]> {
     let queryURL = `${SpotifySearchService.BASE_URL}${URL}`;
     if (params) {
       queryURL = `${queryURL}?${params.join('&')}`;
     }
     const apiKey = SpotifySearchService.spotifyApiKey;
     const headers = new Headers({
       'Authorization': `Bearer ${apiKey}`
     });
     const options = new RequestOptions({ headers: headers});

     return this.http.request(queryURL, options).map((res: any) => res.json());
   }

   search(query: string, type: string): Observable<any[]> {
     return this.query(`/search`, [
       `q=${query}`,
       `type=${type}`
     ]);
   }

   searchTrack(query: string): Observable<any[]> {
     return this.search(query, 'track');
   }

   getTrack(id: string): Observable<any[]> {
     return this.query(`/tracks/${id}`);
   }

   renderTrack(res: any): void {
     this.results = null;
     if (res && res.tracks && res.tracks.items) {
       this.results = res.tracks.items;
     }
   }

}
