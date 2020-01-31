// // break this down into isolated SVGTextPositioningElement.
let bgColorElement = document.querySelector (`body`)

// // remove the "-", uppercase the start of the word that follows
// // text-align >> textAlign
bgColorElement.style.backgroundColor = `palegoldenrod`

document.querySelector(`body`).style.backgroundColor = `#EEE8AA`

// problem A: Randomize three integers, each between 0 and 255
let colorR = 255
let colorG = 197
let colorB = 185

// Problem B: Apply an rgb (#,#,#) value to the backgroundColor
document.querySelector(`body`).style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`

// random color generator
let r = Math.floor(Math.random()*256)
let g = Math.floor(Math.round(5.5))
let b = Math.floor(Math.floor(100))


document.querySelector(`body`).style.backgroundColor = `rgb(${r},${g},${b})`

// // decimal
// let num = 123.456
// num.toFixed(1)

// let modifyTheHeading = () => {
//     let locationOfHeading = document.querySelector(`heading`)
//     locationOfHeading.textContent='yo'
// }

// modifyTheHeading()

let setRandomBackgroundColor = () => {
    // problem A: Randomize three integers, each between 0 and 255
    let colorR = 255
    let colorG = 197
    let colorB = 185

    // Problem B: Apply an rgb (#,#,#) value to the backgroundColor
    document.querySelector(`body`).style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`
}

// // Which element are we listening to?
//     document.querySelector('randomize')
// // What are we listening for?
//     'click'
// // What do we do when it happens?
//     setRandomBackgroundColor

DocumentType.querySelector(`.randomize`).addEventListener(`mouseover`,setRandomBackgroundColor)