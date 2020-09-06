import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from  '../app/shared/app.routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { PlaySongComponent } from './play-song/play-song.component';
import { MymusicListComponent } from './mymusic-list/mymusic-list.component';
import { HeaderComponent } from './header/header.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import {MusicDataService} from './shared/music-data-service';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    PlaySongComponent,
    MymusicListComponent,
    HeaderComponent,
    PageNotfoundComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule
    
    
    
  ],
  providers: [MusicDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
