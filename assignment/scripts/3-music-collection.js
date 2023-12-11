console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

console.log( 'This is the first time displaying myCollection:', myCollection , 'it should be empty at this point!' );

function addToCollection( collection, title, artist, yearPublished ) {
  console.log ( 'in addToCollection, the number of records is: ', myCollection.length );
  let album = {
      title,
      artist,
      yearPublished,
  };
  collection.push(album);
  return album;
}

// Testing the addToCollection function
console.log('Adding albums:');
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'Born & Raised', 'John Mayer', 2012) );
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'The Search for Everything', 'John Mayer', 2017) );
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'Innervisions', 'Stevie Wonder', 1973) );
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'Songs in the Key of Life', 'Stevie Wonder', 1976) );
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'Greatest Hits', 'Steve Miller Band', 1978) );
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'It Is What It Is', 'Thundercat', 2020) );
console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'Jackets XL', 'The Yellow Jackets', 2019) );

console.log( 'My collection:', myCollection , 'At this point there should be 7 albums on the collection' );

// Create a function named showCollection
function showCollection( collection ) {
  console.log( `Collection size: ${collection.length}` );
  for ( let album of collection ) {
      console.log( `${ album.title } by ${ album.artist }, published in ${ album.yearPublished }` );
  }
}

showCollection( myCollection );

console.log( 'Adding an album to the MIX!---:', addToCollection( myCollection, 'Not Tight' , 'DOMi & JD Beck', 2022 ) );

console.log( 'My updated collection: ', myCollection );


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
