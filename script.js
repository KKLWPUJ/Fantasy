document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.image-container');
    const tooltip = document.getElementById('tooltip');

    links.forEach(link => {
        link.addEventListener('mouseover', (event) => {
            const title = link.getAttribute('data-title');
            tooltip.textContent = title;
            tooltip.style.display = 'block';
        });

        link.addEventListener('mousemove', (event) => {
            const linkRect = link.getBoundingClientRect();
            const centerX = linkRect.left + linkRect.width / 2;
            const offsetX = (event.pageX > centerX) ? -tooltip.offsetWidth - 10 : 10;
            tooltip.style.left = `${event.pageX + offsetX}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        link.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
