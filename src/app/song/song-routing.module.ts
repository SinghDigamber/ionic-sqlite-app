import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SongPage } from './song.page';

const routes: Routes = [
  {
    path: '',
    component: SongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongPageRoutingModule {}
