const toggleThemesbtn = document.getElementById('toggleTheme');

const currentTheme = localStorage.getItem('theme') || 'Light';
document.body.classList.add(currentTheme);

function toggleThemes() {
    const newTheme = document.body.classList.contains('Light') ? 'Dark' : 'Light';

    document.body.classList.remove('Light', 'Dark');
    document.body.classList.add(newTheme);

    localStorage.setItem('theme', newTheme);
}

toggleThemesbtn.addEventListener('click', toggleThemes);