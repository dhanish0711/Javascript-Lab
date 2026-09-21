function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
    sessionStorage.setItem('sessionTheme', theme);
}

function clearPreference() {
    localStorage.removeItem('theme');
    sessionStorage.removeItem('sessionTheme');
    document.body.classList.remove('dark');
}

window.onload = function () {
    let saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
    }
};
