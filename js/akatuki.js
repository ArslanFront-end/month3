const contaier = document.querySelector('.container')
const akatsuki = () => {
    const reguest = new XMLHttpRequest()
    reguest.open("GET", "data.json")
    reguest.setRequestHeader("Content-type", "application/json")
    reguest.send()
    console.log(reguest)
    reguest.addEventListener("load", () => {
        const data = JSON.parse(reguest.response)
        data.forEach( (person) => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
                <h5 class="title-name"> ${person.name} </h5>
                <p class="text-history">История: ${person.history} </p>
            `
            card.style.backgroundImage =`url('${person.img}')`

            contaier.append(card)
            console.log(JSON.parse(reguest.response))

        })

    })
}
akatsuki()







