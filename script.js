document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector("button");
    loginButton.addEventListener("click", validateLogin);
});

function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const usernameHint = document.getElementById("usernameHint");
    const passwordHint = document.getElementById("passwordHint");

    usernameHint.textContent = "";
    passwordHint.textContent = "";

    const correctUsername = "GRIFFY";
    const correctPassword = "2024-09-29";

    if (username.toUpperCase() !== correctUsername) {
        usernameHint.textContent = "I'm soft, cuddly, and sleep by your side. Who am I?";
        return;
    }
    
    if (password !== correctPassword) {
        passwordHint.textContent = "The day time had slipped, and hours went by, more than 4 hours passed before the first 'hi'";
        return;
    }
    
    window.location.href = "pagetwo.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.querySelector("button");
    const messageElement = document.getElementById("message");
    const messages = [
        "Huh? You made it through the login page? I'm very suprised coz you suck at these...just kidding",
        "Hi. 🙂. (No this is not an umpretendo emoji). I'm busy eating oats whilst doing this and thinking to myself, ey I love straffing myself yazi when I could've just asked you this straight up instead of creating a fricken website, but I love doing things like these for you so yeah hehehe and I hope you didn't think I'd ask you to be my valentine's the way I did and leave it there right?",
        "You know me mos, I'm not a yapper 😏, so I'll keep things short",
        "You know when the Bible said God made woman from man's rib? Yeah, I believe because aowa, I'm literally incomplete with you, I might just have to ask for my rib back.",
        "I just wanted to take a moment to tell you how much you mean to me. From the very first moment I saw you, I knew there was something special about you.",
        "Every time we talk, my heart feels a little lighter. Your smile, your laugh, the way you make everything brighter... It’s all unforgettable.",
        "I cherish all the memories we’ve made so far and look forward to creating many more with you.",
        "You make my world a better place, and I want to keep making you happy every day.",
        "There's a lot I'd love to say but some things are better said in person",
        "So, here I am, asking the most important question…well, at least for now (wink wink, nudge nudge) 💌",
        "Will you be my Valentine? ❤ (Yes, even with a lip sore 🙂)"
    ];
    let messageIndex = 0;

    setMessage();

    nextButton.addEventListener("click", function () {
        messageIndex++;
        if (messageIndex < messages.length) {
            setMessage();
        } else {

            nextButton.style.display = "none";
            document.getElementById("valentineButtons").style.display = "block";
        }
    });

    document.getElementById("yesButton").addEventListener("click", function () {
        alert("Yay! 😁, I hope this was your first choice...I'm watching you...");
        window.location.href = "https://www.youtube.com/watch?v=bUpR9rIrrR8";
    });

    document.getElementById("noButton").addEventListener("click", function () {
        alert("Trick question humaniod 😑, did you really think you had that choice?");
    });

    function setMessage() {
        messageElement.textContent = messages[messageIndex];
        messageElement.classList.remove("letter-text");
        void messageElement.offsetWidth;
        messageElement.classList.add("letter-text");
    }
});

