import {Routes, RouterModule, Router} from '@angular/router';
import { SongsListComponent } from '../songs-list/songs-list.component';
import { PlaySongComponent } from '../play-song/play-song.component';
import { MymusicListComponent } from '../mymusic-list/mymusic-list.component';
import { NgModule } from '@angular/core';
import { PageNotfoundComponent } from '../page-notfound/page-notfound.component';

const appRoutes:Routes=[
    {path:'',component:SongsListComponent},
    {path:'allSongs',component:SongsListComponent},
    {path:'music/:songName/:songPath',component:PlaySongComponent},
    {path:'mylist',component:MymusicListComponent},
    {path:'not-found',component:PageNotfoundComponent},
    {path:'**',component:PageNotfoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}