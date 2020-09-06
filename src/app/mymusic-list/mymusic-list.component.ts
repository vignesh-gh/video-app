import { Component, OnInit,OnDestroy } from '@angular/core';
import { MusicDataService } from '../shared/music-data-service';
import {Song} from '../shared/song-model';
import {Router }from '@angular/router';

@Component({
  selector: 'app-mymusic-list',
  templateUrl: './mymusic-list.component.html',
  styleUrls: ['./mymusic-list.component.css']
})
export class MymusicListComponent implements OnInit {
  songsList:Song[];
  constructor(private musicService:MusicDataService,private route:Router) { }
 
 

  ngOnInit(): void {
    this.songsList=this.musicService.getMyList();
  }

  playMyListSong(song:Song){
    this.route.navigate(['/music',song.songname,song.songpath])
  }

}
