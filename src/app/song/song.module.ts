import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongPageRoutingModule } from './song-routing.module';

import { SongPage } from './song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SongPage]
})
export class SongPageModule {}
