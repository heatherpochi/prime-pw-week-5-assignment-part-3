console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album;
}

console.log('The first album is', addToCollection('Nevermind', 'Nirvana', 1991));
console.log('The second album is', addToCollection('Renegades', 'RATM', 2000));
console.log('The third album is', addToCollection('Absolution', 'Muse', 2003));
console.log('The fourth album is', addToCollection('Bleach', 'Nirvana', 1989));
console.log('The fifth album is', addToCollection('Parachutes', 'Coldplay', 2000));
console.log('The sixth album is', addToCollection('Coming Up', 'Suede', 1996));

console.log('My favorite albums are', collection);


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
  artist: null,
  year: null
};

function search(criteria){
  let result = [];
  for(let i = 0; i < collection.length; i++){
    if(collection[i].artist === criteria.artist & collection[i].yearPublished === criteria.year){
      result.push(collection[i]);
    }
  }
  if( criteria === null || criteria === undefined){
    return collection;
  }
  return result;
}
console.log(search(criteria));

function addToCollectionUpdated(title, artist, yearPublished, tracks){
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks = {
      name: name,
      duration: duration
    }
  }
  collection.push(album);
  return album;
}

const criteriaUpdated = {
  artist: null,
  year: null,
  trackName: null,
};

function showCollectionUpdated(array){
  console.log(array.length);
  for(let i = 0; i < array.length; i++){
    console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished:);
  }
}
