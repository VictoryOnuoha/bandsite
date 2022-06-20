// Array of Objects to hold shows data 

const concerts = [
    {
        date: "Mon Sept 06 2021 ",
        venue: "Ronald Lane ",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
];

console.table(concerts);

const concertCard = document.querySelector(".shows");
// Concert title element
const concertTitle = document.createElement("h2");
concertTitle.innerText = "Shows";
concertTitle.classList.add("shows__title");
concertCard.appendChild(concertTitle);
console.log(concertCard)

function displayConcert(concert) {


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
    singlecardDate.innerText = concert.date;
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
    singlecardVenue.innerText = concert.venue;
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
    singlecardLocation.innerText = concert.location;
    singleLocationCard.appendChild(singlecardLocation);

    //button
    const concertButton = document.createElement("button");
    concertButton.classList.add("shows__button");
    concertButton.innerText = "BUY TICKETS";
    showsCard.appendChild(concertButton);

}
//Loop through concerts array 
for (let i = 0; i < concerts.length; i++) {
    displayConcert(concerts[i]);
}

