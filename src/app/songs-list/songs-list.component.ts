import { Component, OnInit } from '@angular/core';
import {Song} from '../shared/song-model';
import { MusicDataService } from '../shared/music-data-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  songsList:Song[];
  constructor(private musicService:MusicDataService,private route:Router) { }

  ngOnInit(): void {
    this.songsList=this.musicService.getListOfSongs();
  }

  playSong(song:Song){    
     this.route.navigate(['/music',song.songname,song.songpath]);
  }

  addMyVideoList(song:Song){
    this.musicService.addtoMyList(song);
  }


}
