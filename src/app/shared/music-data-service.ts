import {Song} from '../shared/song-model';
import { EventEmitter, Output } from '@angular/core';

export class MusicDataService{
 
    ListOfSongs:Song[]=[
        new Song('https://www.youtube.com/watch?v=x6Q7c9RyMzk','rowdy-baby'),
        new Song('https://www.youtube.com/watch?v=Zm_vY7vQgpE','Atho antha paravai 1000(1)'),
        new Song('https://www.youtube.com/watch?v=s74uUkk67lg','Nandha ringtone'),
        new Song('https://www.youtube.com/watch?v=XjhCyd0Jf0w','Petta Parak full BGM'),
        new Song('https://www.youtube.com/watch?v=NgtouFFU0hk','Indian BGM'),

    ];

    myList:Song[]=[];

    playSong:Song[]=[];


    getListOfSongs(){
       return  this.ListOfSongs.slice();
    }
       
    
    addtoMyList(song:Song){
        this.myList.push(song);
    }

    getMyList(){
        return this.myList.slice();
    }
    
}