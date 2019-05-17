import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {


@Input() song: Song;


  constructor(private songService:SongService) { 

  }

  ngOnInit() {
  }

  remove(){
this.songService.remove(this.song._id).subscribe( data => {
  
  alert(data.msg);
  
  this.songService.allsongs.emit("deleted!");
})
  }
}
