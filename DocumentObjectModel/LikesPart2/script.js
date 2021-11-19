console.log('Do you like me?')
let likeNum = document.getElementById('likeNum')

let num = 3

function likeMe() {
    num++
    likeNum.innerText = num
}