let searchIcon = document.querySelector('#searchIcon'),
    iconContainer = document.querySelector('#iconContainer'),
    searchInput = document.querySelector('#searchInput'),
    Sugery = document.querySelector('#Sugery')

searchIcon.addEventListener('click', function () {
    openSearchBar()
})
function openSearchBar() {
    searchIcon.classList.replace('text-info', 'text-white')
    iconContainer.classList.replace('position-static', 'position-absolute')
    iconContainer.classList.add('bg-info')
    console.log(searchInput);
    searchInput.classList.add('w-100')
    searchInput.style.border ='solid 1px #ccc'
}
Sugery.addEventListener('click', function name() {
    goTo('/sugery.html')
})

function goTo(URL) {
    window.location.href = URL
}

