var express = require('express');
var router = express.Router();
var artistModel = require('../models/artistModel');
var songModel = require('../models/songModel');



//delete
router.delete('/songs/:id', async (req,res) => {
await songModel.findByIdAndDelete(req.params.id);
res.json({msg:"deleted."});
});

//map and new array
router.get('/songs', async (req,res)=> {
  let allSongs = await songModel.find();
  let allArtists = await artistModel.find();
  let newAllSongs = allSongs.map( song => {

    let currentArtist = allArtists.find(artist => artist._id == song.artistID); 

    return {
      _id: song._id,
      songName:song.songName,
      songDuration: song.songDuration,
      artistName: currentArtist.artistName,
      artistImg: currentArtist.artistImg

    };

  });

  res.json(newAllSongs);

});

router.post('/songs', async (req,res) => {

let newSong = await new songModel(req.body);

await newSong.save();

res.json({msg: "added."});

});


router.get('/artist', async (req,res,next) => {
  let allArists = await artistModel.find();
  res.json(allArists);
});

//create db and collection 'artists'
// router.get('/artist', async (req,res) => {
//   let x1 = await new artistModel({artistName:"Coldplay", artistImg: "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/coldplay-hero-111167291.jpg?itok=WlffAKAT" });
//   let x2 = await new artistModel({artistName:"Muse", artistImg: "https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/muse-hero-169827179.jpg?itok=D1b6QfQ0" });
//   let x3 = await new artistModel({artistName:"Passenger", artistImg: "https://www.cleveland.com/resizer/n_-zm8xJl8YqY200HUhHq3Cvd5M=/1200x0/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/ent_impact_music/photo/midnightpassengerax119-0253-9jpg-666ef7fe2ba2d351.jpg" });

// await x1.save();
// await x2.save();
// await x3.save();

// res.json("ok");
// });


/* GET home page. */
router.get('/', function(req, res, next) {
  
});

module.exports = router;
