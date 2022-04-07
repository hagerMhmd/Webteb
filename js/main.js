// let searchIcon = document.querySelector('#searchIcon'),
//     iconContainer = document.querySelector('#iconContainer'),
//     searchInput = document.querySelector('#searchInput'),
//     Sugery = document.querySelector('#Sugery')

// searchIcon.addEventListener('click', function () {
//     openSearchBar()
// })
// function openSearchBar() {
//     searchIcon.classList.replace('text-info', 'text-white')
//     iconContainer.classList.replace('position-static', 'position-absolute')
//     iconContainer.classList.add('bg-info')
//     console.log(searchInput);
//     searchInput.classList.add('w-100')
//     searchInput.style.border ='solid 1px #ccc'
// }

// newCode
$(document).ready(function () {

     // searchOpen
$("#searchOpen").click(function () {
    $(".shopingCart-holder").removeClass("shopingToggle");
    $(".home-search").css({ "opacity": "1", "visibility": "visible" })
    $(".home-search form").animate({ "width": "70%" }, 500)
})
$("#searchClose").click(function () {
    $(".home-search").css({ "opacity": "0", "visibility": "hidden" })
    $(".home-search form").animate({ "width": "30%" }, 500)
})



    //shopingCart
    //counterone
    let countertext = $("#counterOne").text();
    $("#increaseone").click(function () {
        $("#counterOne").text(++countertext)
    })
    $("#decreaseone").click(function () {
        if (countertext != 1) {
            $("#counterOne").text(--countertext)
        }

    })

    //countertwo
    let counter = $("#countertwo").text();
    $("#increasetwo").click(function () {
        $("#countertwo").text(++counter)
    })
    $("#decreasetwo").click(function () {
        if (counter != 1) {
            $("#countertwo").text(--counter)
        }
    })


//shopingToglle()
$("#shopingIcon").click((function () {
    $(".shopingCart-holder").toggleClass("shopingToggle");
}))

//aside==addclass
$("#conatct-aside").click(function () {
    $(".contact-home").animate({"left":"0"},400);
    $(".contact-close").addClass("closeIcon")
})
//aside==removeclass
$(".contact-close").click(function () {
    $(".contact-home").animate({"left":"-100%"},400);
   
})



// endNewCode


Sugery.addEventListener('click', function name() {
    goTo('/sugery.html')
})

function goTo(URL) {
    window.location.href = URL
}
})

    
