const loadButton = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    const buttonContainer = document.getElementById('btn-container');
    // console.log(data.data);
    data.data.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `
            <button onclick="loadData('${element.category_id}')" class="btn hover:bg-[#FF1F3D] hover:text-white">${element.category}</button>
        `
        buttonContainer.appendChild(div)
    })
}

const loadData = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    // console.log(data.data)
    const cardContainer = document.getElementById('card-container');
    cardContainer.textContent = '';

    const cardContainer2 = document.getElementById('card-container-2');
    cardContainer2.textContent = '';

    // forEach(element => {})
    data.data.forEach(element => {
        console.log(element)

        // convert seconds to hrs, min, sec
        const inputSeconds = parseInt(element.others.posted_date);
        const time = convertSecondsToTime(inputSeconds);
        // console.log(typeof inputSeconds);

        const div = document.createElement('div');
        div.classList.add('mx-auto');
        div.innerHTML = `
        <div class="relative">
            <img class="mb-5 rounded-lg w-[312px] h-[200px]" src=${element.thumbnail} alt="">
            <div class="absolute bottom-0 right-0 text-white pr-3 pb-2">
                <span class="border-solid border-black border rounded-md bg-[#171717] text-xs p-1">
                ${time.hours ? time.hours : '0'} hrs ${time.minutes ? time.minutes : '0'} min ${time.seconds ? time.seconds : '0'} sec</span>
            </div>
        </div>
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

    if (data.data == 0) {
        // console.log('Empty');
        const div = document.createElement('div');
        div.classList.add('text-center');
        div.classList.add('space-y-7')
        div.innerHTML = `
            <img class="mx-auto" src="./Icon.png" alt="">
            <p class="text-3xl font-bold">Oops!! Sorry, There is no <br>
                content here</p>
                `
        cardContainer2.appendChild(div)
    }
}

// Calculate the time
function convertSecondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsFinal = remainingSeconds % 60;

    return {
        hours: hours,
        minutes: minutes,
        seconds: remainingSecondsFinal
    };
}

// Answer The Question js
const answerTheQuestion = () => {
    window.location.href = 'index2.html'
}

loadButton();