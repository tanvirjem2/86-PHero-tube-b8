const loadButton = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const buttonContainer = document.getElementById('btn-container');
    data.data.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `
            <button onclick="loadData('${element.category_id}')" class="btn">${element.category}</button>
        `
        buttonContainer.appendChild(div)
    })
}

const loadData = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    console.log(data.data)
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';
    data.data.forEach(element => {
        // console.log(typeof element.others.views)
        const div = document.createElement('div');
        div.classList.add('mx-auto');
        div.innerHTML = `
        <img class="rounded-lg w-[312px] h-[200px]" class="mb-5" src=${element.thumbnail} alt="">
        <div class="flex gap-4 mt-5">
            <div>
                <img class="rounded-full w-10 h-10" src=${element.authors[0].profile_picture} alt="">
            </div>
            <div class="space-y-2">
                <p class="font-bold">${element.title}</p>
                <div class="flex items-center gap-3">
                    <p class="text-sm">${element.authors[0].profile_name}</p>
                    ${element.authors[0].verified ? '<img src="./fi_10629607.png" alt=""></img>' : ""}
                </div>
                <p class="text-sm">${element.others.views} views</p>
            </div>
        `
        cardContainer.appendChild(div)
    })
}

loadButton();