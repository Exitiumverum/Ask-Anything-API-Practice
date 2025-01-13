'use strict'

let gCharCount = 0
let gAnswer
let isAnswerRendered = false

const INPUT = document.querySelector('.input')

INPUT.addEventListener('focus', (event) => {
    if (isAnswerRendered) {
        destroyAnswer()
        isAnswerRendered = false
        console.log(isAnswerRendered)
        INPUT.value = 'Your question'
        gCharCount = 0
    }
    if (INPUT.value === 'Your question') {
        INPUT.value = ''
        gCharCount = 0
    }

})

INPUT.addEventListener('keyup', (event) => {
    // console.log(event.key);

    if (event.code === 'Backspace') {
        gCharCount--
        console.log(gCharCount)
    } else if (event.key.length === 1) {
        gCharCount++
        console.log(gCharCount)

    }
    // console.log(gCharCount);
    // console.log(event.key);

    if (gCharCount >= 3 && event.key === '?') {
        console.log('hello');
        getAns(renderAns)
        INPUT.blur()
    }
})

function renderAns(ANS) {
    renderAccordingToAns(ANS)

    console.log(ANS.answer);
    console.log(ANS.image);

    const newDiv = document.createElement('div')
    const newHeader = document.createElement('h1')
    const newImg = document.createElement('img')

    newHeader.classList.add('answer-header')
    newDiv.classList.add('answer-div')
    newHeader.innerHTML = `${ANS.answer}`
    newImg.src = `${ANS.image}`

    newDiv.appendChild(newHeader)
    newDiv.appendChild(newImg)
    document.querySelector('.answer').appendChild(newDiv)

    isAnswerRendered = true
    console.log(isAnswerRendered)

    // const currDiv = document.querySelector('.answer')
    // document.body.insertBefore(newDiv, currDiv)

}

function destroyAnswer() {
    document.querySelector('.answer-div').remove()
}

function renderAccordingToAns(ANS) {
    const answer = ANS.answer

    if (answer === 'yes') {
        console.log('worked!');
        getJoke(renderNo)
    } else {
        console.log('worked!');
        getDog(renderYes)
    }
}

function renderYes(src) {
    const newImg = document.createElement('img')
    newImg.src = src.message

    document.querySelector('.answer-div').appendChild(newImg)
}

function renderNo(joke){
    const newHeader = document.createElement('h1')
    newHeader.innerText = joke.value

    document.querySelector('.answer-div').appendChild(newHeader)
}