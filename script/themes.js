<<<<<<< HEADgit 
themeRandomizer = () => {
const theme = ["gold", "pastel", "alcest", "griffith", "guts"]
const random = theme[Math.floor(Math.random() * theme.length)]
return random
}

setTheme = () => {
    const selector = document.getElementsByClassName("image")[0]
    savedTheme = localStorage.getItem('theme')
    if(savedTheme) {
        document.documentElement.className = savedTheme
    }



    selector.addEventListener("click", () => {
        theme = themeRandomizer()
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    })
}

setTheme()
=======
// List of themes in order
const themes = ["gold", "pastel", "alcest", "griffith", "guts"];

// Function to get the next theme in the cycle
const getNextTheme = (currentTheme) => {
    let currentIndex = themes.indexOf(currentTheme);
    let nextIndex = (currentIndex + 1) % themes.length; // Loops back after last theme
    return themes[nextIndex];
};

// Function to set the theme
const setTheme = () => {
    const selector = document.querySelector(".image"); // Select the image element
    let savedTheme = localStorage.getItem("theme") || themes[0]; // Default to first theme if none is saved

    document.documentElement.className = savedTheme;
    selector.src = `./img/${savedTheme}.WebP`;

    // click event to cycle through themes
    selector.addEventListener("click", () => {
        let newTheme = getNextTheme(document.documentElement.className);
        document.documentElement.className = newTheme;
        localStorage.setItem("theme", newTheme);
        selector.src = `./img/${newTheme}.WebP`;
    });
};

// Ensu runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", setTheme);
>>>>>>> 666134c (Changed The Css And JS code)
