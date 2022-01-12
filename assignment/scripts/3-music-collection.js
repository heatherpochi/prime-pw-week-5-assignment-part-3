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
