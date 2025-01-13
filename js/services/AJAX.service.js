'use strict'

function getAns(onSuccess){
    const XHR = new XMLHttpRequest()

    XHR.onreadystatechange = () =>{
        if(XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200){
            const ANS = JSON.parse(XHR.responseText)
            console.log('and is: ', ANS);
            onSuccess(ANS)
        }
    }
    XHR.open('GET', 'https://yesno.wtf/api' ,true)
    XHR.send()
}

function getDog(onSuccess){
    const XHR = new XMLHttpRequest()

    XHR.onreadystatechange = () =>{
        if(XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200){
            const DOG = JSON.parse(XHR.responseText)
            console.log('dog is: ', DOG);
            onSuccess(DOG)
        }
    }
    XHR.open('GET', 'https://dog.ceo/api/breeds/image/random' ,true)
    XHR.send()
}

function getJoke(onSuccess){
    const XHR = new XMLHttpRequest()

    XHR.onreadystatechange = () =>{
        if(XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200){
            const JOKE = JSON.parse(XHR.responseText)
            console.log('joke is: ', JOKE);
            onSuccess(JOKE)
        }
    }
    XHR.open('GET', 'https://api.chucknorris.io/jokes/random' ,true)
    XHR.send()
}