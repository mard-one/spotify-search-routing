import { Component, OnInit } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service';


@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;

  constructor(private searchService: SpotifySearchService) { }

  ngOnInit() {
    this.searchService
    .getTrack(this.id)
    .subscribe((res: any) => this.searchService.renderTrack(res));
  }
}
