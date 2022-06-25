const commentEl = document.querySelector(".comment");

// API from Comments Data to display default comments
function getComments() {
    axios
        .get("https://project-1-api.herokuapp.com/comments?api_key=185f52d0-af7b-4577-8b06-8db46e0375c7")
        .then(response => {
            commentEl.innerHTML = "";
            //Default Comment Array
            const commentData = response.data.sort((a, b) => {
                return b.timestamp - a.timestamp;
            });

            //Loop through comments array
            for (let i = 0; i < commentData.length; i++) {
                displayComment(commentData[i]);
            }
        })
        .catch(error => {
            console.log(error);
        });
}
getComments();

// Function to display one commment object
function displayComment(comment) {
    // Extract Data: Name
    const nameData = comment.name;
    //Date
    const timestampData = comment.timestamp;
    const timestampDateObj = new Date(timestampData);
    const convertedTimestamp = timestampDateObj.toLocaleDateString(undefined);
    //Comment
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

    imageContent.appendChild(commentImage);

    // Comment container
    const commentContent = document.createElement("article");
    commentContent.classList.add("comment-container2");
    commentCard.appendChild(commentContent);

    // name & timestamp container
    const userContainer = document.createElement("div");
    userContainer.classList.add("comment-container");
    commentContent.appendChild(userContainer);

    // name
    const commentName = document.createElement("span");
    commentName.classList.add("comment-container__name");
    commentName.innerText = nameData;
    userContainer.appendChild(commentName);

    //timestamp
    const commentTime = document.createElement("span");
    commentTime.classList.add("comment-container__timestamp");
    commentTime.innerText = convertedTimestamp;
    userContainer.appendChild(commentTime);
    //comment
    const commentText = document.createElement("p");
    commentText.classList.add("comment-container__comment");
    commentText.innerText = commentData;
    commentContent.appendChild(commentText);

    commentEl.appendChild(commentCard);
}

//Create new comments with event listener function
let formElement = document.querySelector(".form");
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
            getComments();

        })

    formElement.reset();
})







