import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';

const httpOptions = {
       headers: new HttpHeaders({
      'Content-Type': 'application/json'     
    })};

@Injectable({
  providedIn: 'root'
})
export class SongService {

  allsongs:EventEmitter<string> = new EventEmitter();

  constructor(private http:HttpClient) { 

  }
  
  getArtist(): Observable<any> {
    return this.http.get("/api/artist");

  }

  //post
  addSong(song:Song):Observable<any> {
    return this.http.post("/api/songs", song, httpOptions);
  }

  //get
  getAllSongs(): Observable<any> {
    return this.http.get("/api/songs");
  }

  //delete
  remove(id: string):Observable<any> {
   return this.http.delete(`/api/songs/${id}`, httpOptions)
  }
}
