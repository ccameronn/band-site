// create instance of api call
const CameronApiKey = "?api_key=f58f6e6b-36c4-44e6-8905-0f8b79ecf516"
import BandSiteApi from "./band-site-api.js";
const BandSiteApiCall = new BandSiteApi(CameronApiKey);

// get comments via api
let commentsSection = await BandSiteApiCall.getComments();


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

    // Assign varibles to name, timestamp, and comment
    nameElement.textContent = object.name;
    timestampElement.textContent = object.timestamp;
    commentElement.textContent = object.comment;
}

// function to take a list of comments and display each comment in the DOM
function addComments(array) {
    array.forEach((event) => {
        displayComment(event);
    })
}

// Add comments on page reload
addComments(commentsSection);

// Add an additional comment when a form is submitted
let form = document.querySelector('.jtc__form-inputs')

form.addEventListener('submit', async function(event){
    event.preventDefault();

    // store the name input, and comment input in variables
    let inputName = event.target.name.value;
    let inputComment = event.target.comment.value;

    // Add error red border to entry box on empty entries
    let nameEntryBox = document.querySelector(".jtc__form-input-name");
    let commentEntryBox = document.querySelector(".jtc__form-input-comment");

    // when both fields are empty
    if (inputName === "" && inputComment === "") {
        nameEntryBox.classList.add("jtc__form-input-name--error-state");
        commentEntryBox.classList.add("jtc__form-input-comment--error-state");
    // when name field is empty
    } else if (inputName === "") {
        commentEntryBox.classList.remove("jtc__form-input-comment--error-state");
        nameEntryBox.classList.add("jtc__form-input-name--error-state");
    // when comment field is empty
    } else if (inputComment === "") {
        nameEntryBox.classList.remove("jtc__form-input-name--error-state");
        commentEntryBox.classList.add("jtc__form-input-comment--error-state");
    // when no fields are empty, action form...
    } else {
        nameEntryBox.classList.remove("jtc__form-input-name--error-state");
        commentEntryBox.classList.remove("jtc__form-input-comment--error-state");


        // create comment object with inputs
        let postCommentObject = {name: inputName, comment: inputComment};
        // post new comment object via api
        let newCommentObject = await BandSiteApiCall.postComment(postCommentObject);
        // receive new comment object named newCommentObject

        // add new object to commentsSection array
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
