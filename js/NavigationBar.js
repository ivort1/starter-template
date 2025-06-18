const toggleBtn = document.getElementById('toggle-menu');
const links = document.getElementById('links');
const listItems = links.querySelectorAll('li');

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('toggle');

    const expanded = toggleBtn.classList.contains('toggle');
    toggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');

    if (expanded) {
        links.style.marginTop = '2rem';
        links.style.height = links.scrollHeight + 'px';

        listItems.forEach((li, index) => {
        li.style.animation =
            `mobileNavLinkFadeIn 0.3s ease forwards ${index / 5 + 0.15}s`;
        });
    } else {
        links.style.marginTop = '0';
        links.style.height = '0';

        listItems.forEach(li => {
            li.style.animation = '';
        });
    }
});