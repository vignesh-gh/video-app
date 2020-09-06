import { Component, OnInit,Input,OnDestroy} from '@angular/core';
import { MusicDataService } from '../shared/music-data-service';
import { Song } from '../shared/song-model';
import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Track, MatBasicAudioPlayerComponent } from 'ngx-audio-player';
//import {Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.component.html',
  styleUrls: ['./play-song.component.css']
})
export class PlaySongComponent implements OnInit,OnDestroy {
  url: SafeResourceUrl;
 song:Song;
 songName:string;
 songPath:string;
 @Input() audioUrl: string;
 //paramsSubscribe:Subscription;
 imgSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9";
  constructor(private musicService:MusicDataService,private router:Router,
    private route:ActivatedRoute,public sanitizer:DomSanitizer) { }
 
  ngOnInit(): void {
   // this.paramsSubscribe=    this.route.params.subscribe((params:Params)=>{
   this.route.params.subscribe((params:Params)=>{
      this.songName=params['songName'];
      var songName=params['songPath'];
      this.songPath=songName;
      this.songPath=this.songPath.replace('watch?v=','embed/')
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.songPath);   
    })

   

  }
  

  
 ngOnDestroy(){
  //this.paramsSubscribe.unsubscribe();
 }


  


}
