
//  Регуляр
const gmailInput = document.getElementById('gmail_input')
const gmailBtn = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')


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
    positionX += 1
    childBlock.style.left = positionX + 'px'
    if (positionX >= 450){
        positionX = 0
    }
}
setInterval(moveBlock, 5)