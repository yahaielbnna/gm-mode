
// new GMode(
//     'button.float', // 1st parameter -->  The query selector of the element that the user will click on
//     {               // 2nd parameter -->  the data set of the Light mode
//         StyleSrc: "assets/style/mode/light-mode.css", // The CSS file dir. that has the light theme style
//         class: "light", // The class name that will add to the main app container at the light mode
//         attr: {    // the attributes that will add to the main app container at the light mode
//             'light': 'yes'
//         },
//         button: { // the element that the user clicks on properties at the Light mode
//             innerhtml: `<i class="fa-solid fa-moon fa-2xl"></i>`, // the inner html of the element at the light mode
//             class: ['class_light_1', 'class_light_2'], // the class names for the element at the light mode
//             attr: { 'light': 'yes' } // the attributes for the element at the light mode
//         }
//     },
//     {               // 3rd parameter -->  the data set of the Dark mode
//         StyleSrc: "assets/style/mode/dark-mode.css",    // The CSS file dir. that has the dark theme style
//         class: "dark",  // The class name that will add to the main app container at the dark mode
//         attr: { // the attributes that will add to the main app container at the dark mode
//             'light': 'no'
//         },
//         button: {   // the element that the user clicks on properties at the dark mode
//             innerhtml: `<i class="fa-solid fa-sun fa-2xl"></i>`,    // the inner html of the element at the dark mode
//             class: ['class_dark_1', 'class_dark_2'],    // the class names for the element at the dark mode
//             attr: { 'light': 'no' } // the attributes for the element at the dark mode
//         }
//     },
//     'body',     // 4th parameter --> The main app container (will contain the class names and attributes)  * The main value = 'body'
//     true      // 5th parameter  --> is the main theme for the website is Light ? * The main value = true
// );


new GMode(
    'button.float',
    {
        StyleSrc: "assets/style/mode/light-mode.css",
        button: {
            innerhtml: `<i class="fa-solid fa-moon fa-2xl"></i>`,
        }
    },
    {
        StyleSrc: "assets/style/mode/dark-mode.css",
        button: {
            innerhtml: `<i class="fa-solid fa-sun fa-2xl"></i>`,
        }
    });

