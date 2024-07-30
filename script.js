document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('menu-content').classList.toggle('active');
    document.getElementById('click-me-text').classList.toggle('hidden');
});
