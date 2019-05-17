import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.css']
})
export class AllsongsComponent implements OnInit {

  allSongs:Song[]=[];

  constructor(private songService: SongService) {

   }

  ngOnInit() {
    this.getAllSongs();

    this.songService.allsongs.subscribe(data => {

      this.getAllSongs();
    })
  }

  getAllSongs() {

    this.songService.getAllSongs().subscribe( data => {

        this.allSongs= data;

    })
  }
}
