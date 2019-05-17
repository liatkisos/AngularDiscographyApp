import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {

  allArtists: Artist[] = [];

  name:string;
  duration:string;
  artistId:string;

  constructor(private songService:SongService) { }

  ngOnInit() {
    this.songService.getArtist().subscribe(data => {
    //debugger;
      this.allArtists = data;

    });
  };

  addSong() {
    let song:Song = new Song(this.name, this.artistId, this.duration);

    this.songService.addSong(song).subscribe(data => {

    alert(data.msg);

    this.songService.allsongs.emit("add");
    });
  };

};
