document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('footer a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Opens external links in a new tab
            const href = link.getAttribute('href');
            if (href && href.startsWith('http')) {
                event.preventDefault();
                window.open(href, '_blank');
            }
        });
    });
});