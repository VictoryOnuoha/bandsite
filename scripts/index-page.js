// Array of Objects to hold default comments
const comments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        // Do we create the date as a  
        // string or a number? You can use the date object
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        userAvatar: "../assets/images/comment-avatar.jpg"
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        userAvatar: "../assets/images/comment-avatar.jpg"
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        userAvatar: "../assets/images/comment-avatar.jpg"
    }
];

// console.table(comments);

const commentEl = document.querySelector(".comment"); 
 

function displayComment(comment) {
   // comment card element
   const commentCard = document.createElement("section");
   commentCard.classList.add("comment-card");

    
    //  create image container 
    const imageContent = document.createElement("article");
    imageContent.classList.add("comment-container1");
    commentCard.appendChild(imageContent);

    // Comment Image
    const commentImage = document.createElement("img");
    commentImage.setAttribute("src", comment.userAvatar);
    commentImage.classList.add("comment-avatar");
    imageContent.appendChild(commentImage);

    // Comment container
    const commentContent = document.createElement("article");
    commentContent.classList.add("comment-container2");
    commentCard.appendChild(commentContent);  

    // name
    const commentName = document.createElement("span");
    commentName.classList.add("comment-container__name");
    commentName.innerText = comment.name;
    commentContent.appendChild(commentName);

    //timestamp
    const commentTime = document.createElement("span");
    commentTime.classList.add("comment-container__timestamp");
    commentTime.innerText = comment.timestamp;
    commentContent.appendChild(commentTime);

    //comment 
    const commentText = document.createElement("p");
    commentText.classList.add("comment-container__comment");
    commentText.innerText = comment.comment;
    commentContent.appendChild(commentText);

    commentEl.appendChild(commentCard); 
   
   
}

    for (let i = 0; i < comments.length; i++ ) {
        displayComment(comments[i]);
        console.log(displayComment);
    }



 
   
{/* <section class=                     "comment" >
<section class="comment-card" > 
    <article class="comment-container1" >
        <img src="" class="comment-avatar"  />
    </article>

    <article class="comment-container2" >
        <span class="comment-container__name" > Connor Walton</span>
         <span class="comment-container__timestamp">02/17/2021</span>
        <p class="comment-container__comment" >This is art</p>

    </article>
</section>
</section> */}

