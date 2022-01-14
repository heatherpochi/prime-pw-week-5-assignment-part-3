console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  const album = {};
  album.title = title;
  album.artist = artist;
  album.yearPublished = yearPublished;
  collection.push(album);
  return album;
}

let album1 = addToCollection('Nevermind', 'Nirvana', 1991);
console.log('The first album is', album1);

let album2 = addToCollection('Renegades', 'RATM', 2000);
console.log('The second album is', album2);

let album3 = addToCollection('Absolution', 'Muse', 2003);
console.log('The third album is', album3);

let album4 = addToCollection('Bleach', 'Nirvana', 1989);
console.log('The fourth album is', album4);

let album5 = addToCollection('Parachutes', 'Coldplay', 2000);
console.log('The fifth album is', album5);

let album6 = addToCollection('Coming Up', 'Suede', 1996);
console.log('The sixth album is', album6);

console.log(collection);

function showCollection(array){
  console.log(array.length);
   for(let i = 0; i < array.length; i++){
    console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished);
  }
}

showCollection(collection);


function findByArtist(artist){
  let result = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === artist){
      result.push(collection[i]);
    }
  }
  return result;
}

console.log('The albums by Nirvana are',findByArtist('Nirvana'));
console.log('The albnum by RATM is', findByArtist('RATM'));
console.log('The albums by Pearl Jam are', findByArtist('Pearl Jam'));

const criteria = {
  artist: 'Ray Charles',
  year: 1957
};

function search(criteria){
  let result = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year){
      result.push(collection[i]);
    }
  }
  if(criteria === undefined || Object.keys(criteria) === 0 ){
    return collection;
  }
  return result;
}

console.log('Search for an album by Ray Charles published in 1957', search(criteria));

criteria.artist = 'Nirvana';
criteria.year = 1991;

console.log('Search for an album by Nirvana published in 1991',search(criteria));

criteria.artist = "Coldplay";
criteria.year = 2021;

console.log('Search for an album by Coldplay published in 2021',search(criteria));

let tracks = [];
function addToTracks(name, duration){
  let track = {};
  track.name = name;
  track.duration = duration;
  tracks.push(track);
}

addToTracks('Smells Like Teen Spirit', '5:01');
addToTracks('In Bloom', '4:15');
addToTracks('Come As You Are', '3:38');
console.log(tracks);


// let collectionWithTracks = [];
//
// function addToCollectionUpdated(title, artist, yearPublished, tracks){
//   const album = {};
//   album.title = title;
//   album.artist = artist;
//   album.yearPublished = yearPublished;
//   album.tracks = new Object();
//   album.track.name = tracks[i][0];
//   album.track.duration = tracks[i][1];
//   collectionWithTracks.push(album);
//   return album;
// }
//
//
// addToCollectionUpdated('Nevermind', 'Nirvana', 1991, tracks);

// console.log(collectionWithTracks);
//
// criteria.artist = 'Nirvana';
// criteria.year = 1991;
// criteria.trackName = 'Smells Like Teen Spririt';
//
// function searchUpdated(criteria){
//   let result = [];
//   for(let i = 0; i < collection.length; i++){
//     if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year && collection[i].track.name === criteria.trackName){
//       result.push(collection[i]);
//       }
//     }
//   if(criteria === undefined || Object.keys(criteria) === 0 ){
//     return collectionWithTracks;
//   }
//   return result;
// }
//
// searchUpdated(criteria);

// addToTracks('Smells Like Teen Spirit', '5:01');
// addToTracks('In Bloom', '4:15');
// console.log(tracks);

//
// criteria.artist = 'Nirvana';
// criteria.year = 1991;
// criteria.trackName = 'Smells Like Teen Spririt';
//
// function searchUpdated(criteria){
//   let result = [];
//   for(let i = 0; i < collection.length; i++){
//     if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year){
//       for(let j = 0; j < tracks.length; j++){
//         if(track.name === criteria.trackName){
//           result.push(collection[i]);
//         }
//       }
//     }
//   }
//   if(criteria === undefined || Object.keys(criteria) === 0 ){
//     return collection;
//   }
//   return result;
// }
//
// console.log(searchUpdated(criteria));

// let album1WithTracks = addToCollectionUpdated('Nevermind', 'Nirvana', 1991, [['Smells Like Teen Spirit', '5:01'], ['In Bloom', '4:15'], ['Come As You Are', '3:38'], ['Breed', '3:04']], ['Lithium', '4:17'], ['Polly', '2:57'], ['Territorial Pissings', '2:22'], ['Drain You', '3:43'], ['Lounge Act', '2:36'], ['Stay Away', '3:32'], ['On a Plain', ['3:16'], ['Something In The Way', '3:52'], ['Endless, Nameless', '6:42']]);
//
// console.log(album1WithTracks);


// console.log('The first album is', addToCollection('Nevermind', 'Nirvana', 1991, [['Smells Like Teen Spirit', '5:01'], ['In Bloom', '4:15']]));
// console.log('The second album is', addToCollection('Renegades', 'RATM', 2000));
// console.log('The third album is', addToCollection('Absolution', 'Muse', 2003));
// console.log('The fourth album is', addToCollection('Bleach', 'Nirvana', 1989));
// console.log('The fifth album is', addToCollection('Parachutes', 'Coldplay', 2000));
// console.log('The sixth album is', addToCollection('Coming Up', 'Suede', 1996));
//
// const criteriaUpdated = {
//   artist: null,
//   year: null,
//   trackName: null,
// };
//
// function showCollectionUpdated(array){
//   console.log(array.length);
//   for(let i = 0; i < array.length; i++){
//     console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished:);
//   }
// }
