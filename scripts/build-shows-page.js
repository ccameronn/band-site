let showDetailsArray = [
    {date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA"},
    {date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA"},
    {date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA"},
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA"},
    {date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA"},
    {date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA"}
];


// function that creates a list item in the DOM with an input object

let showsList = document.querySelector(".shows__list");


function displayShow(object) {

    // create new show using DOM manipulation

    let newShow = showsList.appendChild(document.createElement("li"));
    newShow.classList.add("shows__list-item");

    let dateLabel = newShow.appendChild(document.createElement("p"));
    dateLabel.classList.add("shows__label", "font__labels");
    dateLabel.textContent = "DATE";

    let dateInfo = newShow.appendChild(document.createElement("p"));
    dateInfo.classList.add("shows__date", "font__body-copy--bold");
    

    let venueLabel = newShow.appendChild(document.createElement("p"));
    venueLabel.classList.add("shows__label", "font__labels");
    venueLabel.textContent = "VENUE";

    let venueInfo = newShow.appendChild(document.createElement("p"));
    venueInfo.classList.add("shows__venue", "font__body-copy");


    let locationLabel = newShow.appendChild(document.createElement("p"));
    locationLabel.classList.add("shows__label", "font__labels");
    locationLabel.textContent = "LOCATION";

    let locationInfo = newShow.appendChild(document.createElement("p"));
    locationInfo.classList.add("shows__location", "font__body-copy");



    let newButton = newShow.appendChild(document.createElement("button"));
    newButton.classList.add("shows__button",  "font__buttons");
    newButton.textContent = "BUY TICKETS";


    let newDivider = newShow.appendChild(document.createElement("div"));
    newDivider.classList.add("shows__divider");


    // Assign varibles to date, venue, and location

    dateInfo.textContent = object.date;
    venueInfo.textContent = object.venue;
    locationInfo.textContent = object.location



}


function displayShows(array) {
    array.forEach((event) => {
        displayShow(event);
    })
}

// Add comments on page load

displayShows(showDetailsArray);