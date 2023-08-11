
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
let positionX = 0, positionY = 0


const moveBlock = () => {
    if (positionX <= 449 && positionY === 0){
        positionX++
        childBlock.style.marginLeft = positionX + 'px'
        setTimeout(moveBlock, 0)
    } else if(positionY <= 449 && positionX > 449){
        positionY++
        childBlock.style.marginTop = positionY + 'px'
        setTimeout(moveBlock, 0)
    }else if (positionX >= 0){
        positionX--
        childBlock.style.marginLeft = positionX + 'px'
        setTimeout(moveBlock, 0)
    }else if (positionY >= 0){
        positionY--
        childBlock.style.marginTop = positionY + 'px'
        setTimeout(moveBlock, 0)
    }
}

moveBlock()
























// const moveBlock = () => {
//     if (positionX <= 450 && positionY === 0){
//         positionX++
//         // console.log(positionX)
//         childBlock.style.left = positionX + 'px'
//         setTimeout(moveBlock, -900)
    
//     } else if (positionY <= 450) {
//         positionY++
//         console.log(positionY);
//         childBlock.style.top = positionY + 'px'
//         setTimeout(moveBlock, 0)
//     } else if (positionX >= 0 ){
//         positionX--
//         childBlock.style.left = positionX + 'px'
//         setTimeout(moveBlock, 0)
//     } else if (positionY > 0) {
//         positionY--
//         childBlock.style.top = positionY + 'px'
//         setTimeout(moveBlock,)
//     }
// }
// moveBlock()
