const closeBtn = document.querySelector(".close-btn");
const cancelBtn = document.querySelector(".cancel");
const submitBtn = document.querySelector(".submit");
const feedBtns = document.querySelectorAll(".feedbtn");
const container = document.querySelector(".container");

closeBtn.addEventListener("click", function () {
    container.classList.add("show-container");
})
cancelBtn.addEventListener("click", function () {
    container.classList.add("show-container");
})


function submitFeedback() {
    let rating = 0;
    feedBtns.forEach(function (btns) {
        btns.addEventListener("click", function (e) {
            rating = e.target.textContent;
        })
    });

    return function logFeedback() {
        const message = document.createElement('h2');
        if (rating !== 0) {
            container.classList.add('show-container');
            message.textContent = `Thank you for your feedback.You have selected rating of ${rating}`;
            document.body.insertAdjacentElement("afterbegin", message)
            console.log(Number(rating));
        }
    }
}
const feedbackLog = submitFeedback();


submitBtn.addEventListener("click", feedbackLog);