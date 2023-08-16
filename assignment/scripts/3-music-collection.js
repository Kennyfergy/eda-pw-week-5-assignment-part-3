console.log("***** Music Collection *****");

// Create an empty array called 'collection'
const collection = [];

// Add a function named 'addToCollection'
function addToCollection(title, artist, yearPublished) {
  // Create a new album object
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  }; // end create new object

  // Add the album object to the end of the 'collection' array
  collection.push(album);

  // Return the newly created album object
  return album;
} // end addToCollection
console.log("The collection should be empty test:", collection);
