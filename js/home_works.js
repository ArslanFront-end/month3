
//  Регуляр
const gmailInput = document.getElementById('gmail_input'),
    gmailBtn = document.getElementById('gmail_button'),
    gmailResult = document.getElementById('gmail_result')


const regExp = /^(.+)@(gmail.com)$/ 

gmailBtn.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "Непрваильный Формат"
        gmailResult.style.color = "red"
}
    }


//Рекурсия
const childBlock = document.querySelector('.child_block')
let positionX = 0

const moveBlock = () => {
    if (positionX <= 450){
        positionX++
        childBlock.style.left = positionX + 'px'
        setTimeout(moveBlock, 0)
    }
}
moveBlock()