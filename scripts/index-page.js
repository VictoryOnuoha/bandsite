// Create an Array of Objects to hold default comments

const comments = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        // Do we create the date as a  
        // string or a number? You can use the date object
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        userAvatar: ""
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        userAvatar: ""
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        userAvatar: ""
    }
]

console.log(comments);
console.table(comments);

// .comment is primary container
// Select parent container via javascript 
    const commentEl = document.querySelector(".comment");
    //  console.log(commentEl);
    //  create image container 
     const imageContent = document.createElement("article");
    //  console.log("This is image ctner: ", imageContent);
     //customize
     imageContent.classList.add("comment-container1");
    //  console.log(imageContent);
     //append to parent
     commentEl.appendChild(imageContent);
    //  console.log(commentEl);

    // Comment Image
    // create
    const commentImage = document.createElement("img");
    // console.log("This is the image element: ", commentImage);
    // customize
    commentImage.setAttribute("src", comments[0].userAvatar);
    // console.log("This is the image element", typeof comments[0].userAvatar);
    // Append
    imageContent.appendChild(commentImage);
    // console.log("this is current: ", commentEl);

    // Comment container
    //create comment container 
    const commentContent = document.createElement("article");
    console.log(commentContent);
    
// Create Function to create comment 
function displayComment(comment) {
    //Display comment on page using DOM 
}

{/* <section class="comment" >
    <article class="comment-container1" >
        <img src=""  />
    </article>

    <article class="comment-container2" >
        <span class="comment-container__name" > Connor Walton</span>
        <p class="comment-container__comment" >This is art</p>

    </article>
</section> */}

