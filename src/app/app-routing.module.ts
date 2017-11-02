import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchComponent } from './components/search/search.component';
import { TrackComponent } from './components/track/track.component';

const routes: Routes = [

  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'track', component: TrackComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
