export class Song {
    songName: string;
    artistID: string;
    songDuration: string;
    _id: string;

    constructor(songName: string, artistId: string, songDuration: string) {

        this.songName=songName;
        this.artistID=artistId;
        this.songDuration=songDuration;
    };

};