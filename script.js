const reviewButtons = document.querySelectorAll(".review-toggle");

reviewButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const reviewBox = button.parentElement;
        reviewBox.classList.toggle("active");
    });
});