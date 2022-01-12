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

// function showCollection(array){
//   console.log(array.length);
//   for(let i = 0; i < array.length; i++){
//     console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished);
//   }
// }
//
// showCollection(collection);
//
// function findByArtist(artist){
//   let result = [];
//   for(let i = 0; i < collection.length; i++){
//     if(collection[i].artist === artist){
//       result.push(collection[i]);
//     }
//   }
//   return result;
// }
//
// console.log('The albums by Nirvana are',findByArtist('Nirvana'));
// console.log('The albnum by RATM is', findByArtist('RATM'));
// console.log('The albums by Pearl Jam are', findByArtist('Pearl Jam'));
//
// const criteria = {
//   artist: null,
//   year: null
// };
//
// function search(criteria){
//   let result = [];
//   for(let i = 0; i < collection.length; i++){
//     if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year){
//       result.push(collection[i]);
//     }
//   }
//   if( criteria === null || criteria === undefined){
//     return collection;
//   }
//   return result;
// }
// console.log(search(criteria));
//
// function addToCollectionUpdated(title, artist, yearPublished, tracks){
//   const album = {
//     title: title,
//     artist: artist,
//     yearPublished: yearPublished,
//     tracks: [name, duration]
//   }
//   collection.push(album);
//   return album;
// }
//
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
