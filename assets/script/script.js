// GMode('button.float')
//     .Light({
//         StyleSrc: "assets/style/mode/light-mode.css",
//         class: "light",
//         button: {
//             innerhtml: 'a7a',
//             class: ['test', 'yes'],
//             attr: { 'test': 'no' }
//         }
//     })
//     .Dark({
//         StyleSrc: "assets/style/mode/dark-mode.css",
//         class: "dark",
//         button: {
//             innerhtml: 'a7a 2',
//             class: ['test', 'yes'],
//             attr: { 'test': 'no' }
//         }
//     })

new GMode('button.float', {
    StyleSrc: "assets/style/mode/light-mode.css",
    class: "light",
    attr: {
        'light': 'yes'
    },
    button: {
        innerhtml: `<i class="fa-solid fa-moon fa-2xl"></i>`,
        class: ['class_light_1', 'class_light_2'],
        attr: { 'light': 'yes' }
    }
}, {
    StyleSrc: "assets/style/mode/dark-mode.css",
    class: "dark",
    attr: {
        'light': 'no'
    },
    button: {
        innerhtml: `<i class="fa-solid fa-sun fa-2xl"></i>`,
        class: ['class_dark_1', 'class_dark_2'],
        attr: { 'light': 'no' }
    }
}, 'html', false)
