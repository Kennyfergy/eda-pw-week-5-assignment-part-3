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
//testing the addToCollection function

const album1 = addToCollection("Old Dominion", "Old Dominion", 2019);
console.log("Added album:", album1); //added first album

const album2 = addToCollection("Planet Zero", "Shinedown", 2022);
console.log("Added album:", album2); //added a second album

const album3 = addToCollection("Painkiller", "Little Big Town", 2014);
console.log("Added album:", album3); //added 3rd album

const album4 = addToCollection("All The Right Reasons", "Nickelback", 2005);
console.log("Added album:", album4); // added 4th album

const album5 = addToCollection("Babel", "Mumford and Sons", 2012);
console.log("Added album:", album5); //added 5th album

const album6 = addToCollection("Dangerous", "Morgan Wallen", 2021);
console.log("Added album:", album6); //added a 6th album
console.log(); //adding spacing for organization
console.log("------------------------");
console.log();
console.log("The current collection is:", collection); //logging current collection
