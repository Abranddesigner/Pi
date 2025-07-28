document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-links a');
    const contentFrame = document.getElementById('contentFrame');
    const backButton = document.getElementById('backButton');

    // Set initial state to Home
    contentFrame.src = 'about:blank';
    backButton.style.display = 'none';

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const url = link.getAttribute('data-url');

            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            if (url === 'home') {
                contentFrame.src = 'about:blank';
                backButton.style.display = 'none';
            } else {
                contentFrame.src = url;
                backButton.style.display = 'block';
            }
        });
    });

    backButton.addEventListener('click', () => {
        contentFrame.src = 'about:blank';
        backButton.style.display = 'none';
        links.forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-links a[data-url="home"]').classList.add('active');
    });
});
