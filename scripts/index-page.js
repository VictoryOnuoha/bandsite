const commentEl = document.querySelector(".comment");

// API from Comments Data to display default comments
function getComments() {
    axios
.get("https://project-1-api.herokuapp.com/comments?api_key=185f52d0-af7b-4577-8b06-8db46e0375c7")
.then(response => {
    //Default Comment Array
    const commentData = response.data.sort((a, b) => {
        return b.timestamp - a.timestamp ;
    });
    console.log(response.data[0]);
    console.log(commentData);

    //Loop through comments array
for (let i = 0; i < commentData.length; i++) {
    displayComment(commentData[i]);
    // console.log(displayComment);
}
})
.catch(error => {
    console.log(error);
});
}
console.log(getComments());

axios
.get("https://project-1-api.herokuapp.com/comments?api_key=185f52d0-af7b-4577-8b06-8db46e0375c7")
.then(response => {
    //Default Comment Array
    const commentData = response.data;
    console.log(response.data[0]);
    console.log(commentData);

    //Loop through comments array
for (let i = 0; i < commentData.length; i++) {
    displayComment(commentData[i]);
    // console.log(displayComment);
}
})
.catch(error => {
    console.log(error);
});



// Function to display one commment object
function displayComment(comment) {
    // Extract Data
    const nameData = comment.name;

    const timestampData = comment.timestamp;
    const timestampDateObj = new Date (timestampData);
    const convertedTimestamp = timestampDateObj.toLocaleDateString(undefined);
    
    const commentData = comment.comment;
    
    // comment card element
    const commentCard = document.createElement("section");
    commentCard.classList.add("comment-card");

    //  create image container
    const imageContent = document.createElement("article");
    imageContent.classList.add("comment-container1");
    commentCard.appendChild(imageContent);

    // Comment Image
    const commentImage = document.createElement("img");
    commentImage.classList.add("comment-avatar");
     commentImage.setAttribute("src", "./assets/images/comment-avatar.jpg");
     console.log(commentImage);
    imageContent.appendChild(commentImage);

    // Comment container
    const commentContent = document.createElement("article");
    commentContent.classList.add("comment-container2");
    commentCard.appendChild(commentContent);

    // name
    const commentName = document.createElement("span");
    commentName.classList.add("comment-container__name");
    commentName.innerText = nameData;
    commentContent.appendChild(commentName);

    //timestamp
    const commentTime = document.createElement("span");
    commentTime.classList.add("comment-container__timestamp");
    commentTime.innerText = convertedTimestamp;
    commentContent.appendChild(commentTime);

    //comment
    const commentText = document.createElement("p");
    commentText.classList.add("comment-container__comment");
    commentText.innerText = commentData;
    commentContent.appendChild(commentText);

    commentEl.appendChild(commentCard);
}

//Create new comments
let formElement = document.querySelector(".form");
    //Add event listener
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        const newComment = {
            name: event.target.fullName.value,
            comment: event.target.userComment.value
        };


    // Post new Comments
    axios
    .post("https://project-1-api.herokuapp.com/comments?api_key=185f52d0-af7b-4577-8b06-8db46e0375c7", newComment)
    .then(response => {
    //     newCommentData = response.data
    //    commentData.unshift(newCommentData);
        // displayComment(newCommentData);
        getComments();
        console.log(response.data);
    })
    console.log(newCommentData);
    formElement.reset();
})



// formElement.addEventListener("submit", event => {
//     event.preventDefault();
//     const newComment = {};

//     // select inputs by value property
//     const fullName = event.target.fullName.value;
//     const userComment = event.target.userComment.value;

//     newComment.name = fullName;
//     newComment.comment = userComment;

//     comments.unshift(newComment);

//     submitForm(comments);

// });

// const submitForm = userValue => {

//     for (let i = 0; i < userValue.length; i++) {
//         const newComment = document.createElement("p");
//         newComment.innerText = userValue[i].name;
//         newComment.innerText = userValue[i].comment;
//         console.log(userValue[i]);
//         commentEl.appendChild(newComment);
//     }
// }





