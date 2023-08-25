// phone checker

const phoneInput = document.querySelector('#phone_input')
const phoneCheckt = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheckt.onclick = () =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'ok'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color= 'red'
    }
}

//TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs =document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContent.forEach( (item) => {
        item.style.display = 'none'
    })
    tabs.forEach( (item) => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()


tabsParent.onclick = (event) => {
    const target = event.target
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach( (item, i) => {
            if (event.target === item) {
                hideTabContent(i)
                showTabContent(i)

            }
        })
    }
}
let slideIndex = 0
const slideTime = () =>{
    slideIndex++
    if(slideIndex>4){
        slideIndex=0
    }
    hideTabContent()
    showTabContent(slideIndex)
}

setInterval(slideTime , 3000)


//kiss - keep it short and simple


const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const convert = (elem, target, target2, ) => {
    elem.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()
        request.onload = () => {
            const response = JSON.parse(request.response)
            target.forEach(e =>{
                if (target2 === 'som') {
                    e.value = (elem.value / response[e.id]).toFixed(2)
                } else if (e === som) {
                    e.value = (elem.value * response[elem.id]).toFixed(2)
                } else {
                    e.value = ((elem.value * response[elem.id]) / response[e.id]).toFixed(2)
                }
            })
            if (elem.value === '') {
                target.forEach(e => e.value = '')
            }

            elem.value === '' && (target.forEach(e => e.value = ''))
        }
    }
}
convert(som,[usd , eur])
convert(usd ,[som,eur] )
convert(eur,[som,usd])