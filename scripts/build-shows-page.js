// Save apikey in a variable as per documentation
// let apiKey = "185f52d0-af7b-4577-8b06-8db46e0375c7";


let concertCard = document.querySelector(".shows");
// console.log(concertCard);

// Concert title element
const concertTitle = document.createElement("h2");
concertTitle.innerText = "Shows";
concertTitle.classList.add("shows__title");
concertCard.appendChild(concertTitle);

// Get API to get Shows Data 
axios
.get("https://project-1-api.herokuapp.com/showdates?api_key=185f52d0-af7b-4577-8b06-8db46e0375c7")
.then(response => {
    console.log(response);
    // Array of Shows Data
    const showsData = response.data;


    //Loop through api  array 
    for (let i = 0; i < showsData.length; i++) {
    displayConcert(showsData[i]);
    
    }   
    console.log(showsData);



})
.catch(error => {
    console.log(error)
})

function displayConcert(show) {
//Extract data from API ; date was string, converted to number
const dateData = show.date;
console.log(typeof dateData);
const newDateData = Number(dateData);
const dateDataObj = new Date(newDateData)
//Set date options for the object
let options = { 
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
}
const convertedDateData = dateDataObj.toLocaleDateString(undefined, options)
console.log(convertedDateData);
console.log(dateData);
const venueData = show.place;
const locationData = show.location;

// Display Data

//concert card element
const showsCard = document.createElement("section");
showsCard.classList.add("shows__card");
concertCard.appendChild(showsCard);

//single card 
const singleCard = document.createElement("article");
singleCard.classList.add("shows__card-date");
showsCard.appendChild(singleCard);

// single card date element
const singlecardDates = document.createElement("span");
singlecardDates.innerText = "DATE"
singleCard.appendChild(singlecardDates);
//date
const singlecardDate = document.createElement("p");
singlecardDate.innerText = convertedDateData;
singleCard.appendChild(singlecardDate);

//single card venue 
const singleVenueCard = document.createElement("article");
singleVenueCard.classList.add("shows__card-venue");
showsCard.appendChild(singleVenueCard);

//single card venue 
const singlecardVenues = document.createElement("span");
singlecardVenues.innerText = "VENUE"
singleVenueCard.appendChild(singlecardVenues);

//venue
const singlecardVenue = document.createElement("p");
singlecardVenue.innerText = venueData;
singleVenueCard.appendChild(singlecardVenue);

//single card location
const singleLocationCard = document.createElement("article");
singleLocationCard.classList.add("shows__card-location");
showsCard.appendChild(singleLocationCard);

//single location
const singlecardLocations = document.createElement("span");
singlecardLocations.innerText = "LOCATION";
singleLocationCard.appendChild(singlecardLocations);

//location
const singlecardLocation = document.createElement("p");
singlecardLocation.innerText = locationData;
singleLocationCard.appendChild(singlecardLocation);

//button
const concertButton = document.createElement("button");
concertButton.classList.add("shows__button");
concertButton.innerText = "BUY TICKETS";
showsCard.appendChild(concertButton);
}




