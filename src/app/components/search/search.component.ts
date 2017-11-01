import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifySearchService } from '../../services/spotify-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SpotifySearchService) { }

  ngOnInit() {
  }

}
