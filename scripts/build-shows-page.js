const CameronApiKey = "?api_key=f58f6e6b-36c4-44e6-8905-0f8b79ecf516"

// API Call for show details

import BandSiteApi from "./band-site-api.js";

const BandSiteApiCall = new BandSiteApi(CameronApiKey);

let showDetailsArray = await BandSiteApiCall.getShows();






let showsList = document.querySelector(".shows__list");

// HEADER LABELS only visible in tablet and desktop view
function createHeaderLabels() {
    let labelHeaderContainer = showsList.appendChild(document.createElement("div"));
    labelHeaderContainer.classList.add("shows__label-header-container");


    let dateLabelHeader = labelHeaderContainer.appendChild(document.createElement("p"));
    dateLabelHeader.classList.add("shows__label-header", "font__labels");
    dateLabelHeader.textContent = "DATE";

    let venueLabelHeader = labelHeaderContainer.appendChild(document.createElement("p"));
    venueLabelHeader.classList.add("shows__label-header", "font__labels");
    venueLabelHeader.textContent = "VENUE";

    let locationLabelHeader = labelHeaderContainer.appendChild(document.createElement("p"));
    locationLabelHeader.classList.add("shows__label-header", "font__labels");
    locationLabelHeader.textContent = "LOCATION";

    let spacingLabelHeader = labelHeaderContainer.appendChild(document.createElement("p"));
    spacingLabelHeader.classList.add("shows__label-header");
}

createHeaderLabels()


// function that creates a list item in the DOM with an input object

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


    let newDivider = showsList.appendChild(document.createElement("div"));
    newDivider.classList.add("shows__divider");


    // function to change color of a show item on click
    newShow.addEventListener("click", () => {
        // Remove active class from all show items
        const allShows = document.querySelectorAll(".shows__list-item");
        allShows.forEach((show) => {
          show.classList.remove("shows__list-item--active");
        });
    
        // Adds the active class to the clicked show item
        newShow.classList.add("shows__list-item--active");
      });


    // Assign varibles to date, venue, and location

    dateInfo.textContent = object.date;
    venueInfo.textContent = object.venue;
    locationInfo.textContent = object.location



}


function loadShows(array) {
    array.forEach((event) => {
        displayShow(event);
    })
}

// Add comments on page load

loadShows(showDetailsArray);


