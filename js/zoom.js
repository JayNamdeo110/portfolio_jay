function toggleFullScreen(imageId) {
    var image = document.getElementById(imageId);
    var body = document.body;

    if (!image.classList.contains('fullscreen')) {
        // Apply fullscreen class to the image
        image.classList.add('fullscreen');
        // Apply blurred background to the body
        body.classList.add('blurred-background');
    } else {
        // Remove fullscreen class from the image
        image.classList.remove('fullscreen');
        // Remove blurred background from the body
        body.classList.remove('blurred-background');
    }
}
const scrollButton = document.getElementById('scrollButton');
let isAtBottom = false;

scrollButton.addEventListener('click', function() {
    if (isAtBottom) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        scrollButton.textContent = 'Go to Bottom';
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        scrollButton.textContent = 'Go to Top';
    }
    isAtBottom = !isAtBottom;
});

