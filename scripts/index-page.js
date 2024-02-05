
// let commentsSection = [
//     {name: "Miles Acosta", timestamp: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."},
//     {name: "Emilie Beach", timestamp: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
//     {name: "Connor Walton", timestamp: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."}    
// ];


const CameronApiKey = "?api_key=f58f6e6b-36c4-44e6-8905-0f8b79ecf516"

import BandSiteApi from "./band-site-api.js";

const BandSiteApiCall = new BandSiteApi(CameronApiKey);

// let commentsSection = BandSiteApiCall.getComments()
let commentsSection = BandSiteApiCall.getComments()
console.log(commentsSection)




// Selector for the comment list

let commentList = document.querySelector(".jtc__comments");


// Function that takes in a comment object and displays it on the page using DOM manipulation

function displayComment(object) {

    // create new comment using DOM manipulation

    let newCommentItem = commentList.appendChild(document.createElement("li"));

    newCommentItem.classList.add("jtc__comments-item", "jtc__clear");
    let imageDiv = newCommentItem.appendChild(document.createElement("div"));
    imageDiv.classList.add("jtc__comments-image-container");

    let imageElement = imageDiv.appendChild(document.createElement("img"));
    imageElement.classList.add("jtc__comments-image");



    let textDiv= newCommentItem.appendChild(document.createElement("div"));
    textDiv.classList.add("jtc__comments-text");

    let subheaderDiv = textDiv.appendChild(document.createElement("div"));
    subheaderDiv.classList.add("jtc__comments-sub-header");

    let nameElement = subheaderDiv.appendChild(document.createElement("p"));
    nameElement.classList.add("font__body-copy--bold");

    let timestampElement = subheaderDiv.appendChild(document.createElement("p"));
    timestampElement.classList.add("font__body-copy--timestamp");

    let commentDiv = textDiv.appendChild(document.createElement("div"));
    let commentElement = commentDiv.appendChild(document.createElement("p"));
    commentElement.classList.add("font__body-copy");

    let newDivider = commentList.appendChild(document.createElement("div"));
    newDivider.classList.add("jtc__comments-divider", "jtc__clear");


    // Assign varibles to name, timestamp, comment, and image

    
    nameElement.textContent = object.name;
    timestampElement.textContent = object.timestamp;
    commentElement.textContent = object.comment;

}


function addComments(array) {
    array.forEach((event) => {
        displayComment(event);
    })
}

// Add comments on page load

addComments(commentsSection);



// Add comment when a form is submitted

let form = document.querySelector('.jtc__form-inputs')


form.addEventListener('submit', function(event){
    event.preventDefault();

    // store Name input, comment input,  timestamp, 

    time = new Date();

    let inputName = event.target.name.value;
    let inputComment = event.target.comment.value;
    let inputTimestamp = (time.getMonth() + 1) + "/" + time.getDate() + "/" + time.getFullYear();

    // Add error red border to entry box on empty entries

    if (inputName === "") {
        let nameEntryBox = document.querySelector(".jtc__form-input-name");
        nameEntryBox.classList.add("jtc__form-input-name--error-state");

    } else if (inputComment === "") {
        let commentEntryBox = document.querySelector(".jtc__form-input-comment");
        commentEntryBox.classList.add("jtc__form-input-comment--error-state");
    
    } else {
        let nameEntryBox = document.querySelector(".jtc__form-input-name");
        nameEntryBox.classList.remove("jtc__form-input-name--error-state");
        let commentEntryBox = document.querySelector(".jtc__form-input-comment");
        commentEntryBox.classList.remove("jtc__form-input-comment--error-state");

        // create object with the above

        let newCommentObject = {name: inputName, timestamp: inputTimestamp, comment: inputComment};

        // add object to commentsSection array

        commentsSection.push(newCommentObject);

        // clear form inputs

        form.reset()

        // clear comments on site

        let currentComments = document.querySelectorAll(".jtc__clear");
        currentComments.forEach((event) => {
            event.remove();
        })

        // Add all comments to page

        addComments(commentsSection);

    }


})
