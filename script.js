document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const letterContainer = document.getElementById('letterContainer');
    const closeButton = document.getElementById('closeButton');

    // Show the letter with animation when the heart is clicked
    heart.addEventListener('click', () => {
        letterContainer.classList.add('active');
    });

    // Close the letter container
    closeButton.addEventListener('click', () => {
        letterContainer.classList.remove('active');
    });
});
