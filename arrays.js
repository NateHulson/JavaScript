//Array. We use square brackets when using an array

// let favouriteSong = [
//     "Deuce - Who can stop us",
//     "Papa Roach - Scars",
//     "Queen - Radio Gaga"
// ];

// console.log(favouriteSong);

//We can use arrays to access individual items within the strings. This can be accomplished by using [ ]
// and a number from 0 (first index number) onwards which will look like console.log(favouriteSong[2])
//this will instead show Queen-radio Gaga instead of the other two. 

// let favouriteSong = [
//     "Deuce - Who can stop us",
//     "Papa Roach - Scars",
//     "Queen - Radio Gaga"
// ];

// console.log(favouriteSong[2]);

//by adding an extra array before teh console.log, the new input with exchange the position [1] song to
//the new song.

// let favouriteSong = [
//     "Deuce - Who can stop us",
//     "Papa Roach - Scars",
//     "Queen - Radio Gaga"
// ];

// favouriteSong[1] = "Rolling stones- Paint it black"

// console.log(favouriteSong);


//Using the .length will count the length of the array
// let favouriteSong = [
//     "Deuce - Who can stop us",
//     "Papa Roach - Scars",
//     "Queen - Radio Gaga"
// ];

// favouriteSong[1] = "Rolling stones- Paint it black"

// console.log(favouriteSong.length);

//Using the .push will add an extra string into the array before the console so instead of having 3 in my list
//it'll show 4.

// let favouriteSong = [
//     "Deuce - Who can stop us",
//     "Papa Roach - Scars",
//     "Queen - Radio Gaga"
// ];

// favouriteSong.push ("Mike gordon -Touch me and ill break your face")

// console.log(favouriteSong)

// using .pop will remove the last one within the array when displayed by the console
// let favouriteSong = [
//     "Deuce - Who can stop us",
//     "Papa Roach - Scars",
//     "Queen - Radio Gaga"
// ];

// favouriteSong.pop();

// console.log(favouriteSong);

// Extras to look at .shift()  .unshift() . slice() . splice()

// let favouriteWebsite =[
//     "Youtube",
//     "Twitch",
//     "Amazon",
// ]

// favouriteWebsite.push("SharkRobot")
// favouriteWebsite.push("Facebook")

// favouriteWebsite.pop()
// console.log(favouriteWebsite)

//splice will remove one of the index's and replace it with a new item
// let favouriteWebsite =[
//     "Youtube",
//     "Twitch",
//     "Amazon",
// ];
// favouriteWebsite.splice(0 , 3, "Mixer");
// console.log(favouriteWebsite);

// slice- creates a new set of vatriables instead of the original

// let favouriteWebsite =[
//     "Youtube",
//     "Twitch",
//     "Amazon",
// ];
// bestWebsites= favouriteWebsite.slice(0 , 3  )
// console.log(bestWebsites);

//Shift-removes the 0 index
// let favouriteWebsite =[
//     "Youtube",
//     "Twitch",
//     "Amazon",
// ];
// favouriteWebsite.shift()
// console.log(favouriteWebsite);

//Unshift-adds more items the the 0 index 
// let favouriteWebsite =[

//     "Youtube",
//     "Twitch",
//     "Amazon",
// ];
// favouriteWebsite.unshift("Twitter","Mixer")
// console.log(favouriteWebsite);

//
