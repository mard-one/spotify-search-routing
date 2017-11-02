import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(private searchService: SpotifySearchService, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.query = params.query || '';
    });
  }

  search(): void{
    if (!this.query) {
      return;
    }
    this.searchService.searchTrack(this.query).subscribe((res: any)=>this.renderResults(res))
  }

  renderResults(res: any): void {
   this.results = null;
   if (res && res.tracks && res.tracks.items) {
     this.results = res.tracks.items;
   }
 }

 submit(query: string): void {
   this.router.navigate(['search'], { queryParams: { query: query } })
   .then(_ => this.search() );
 }

  ngOnInit(): void {
    this.search();
  }

}
