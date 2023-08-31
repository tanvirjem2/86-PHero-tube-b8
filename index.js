const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data = await res.json()
    console.log(data.data);
    const buttonContainer = document.getElementById('btn-container');
    data.data.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `
            <button class="btn">${element.category}</button>
        `
        buttonContainer.appendChild(div)
    })
}

loadData();