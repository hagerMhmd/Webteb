let searchIcon = document.querySelector('#searchIcon'),
    iconContainer = document.querySelector('#iconContainer'),
    searchInput = document.querySelector('#searchInput'),
    sugery = document.querySelector('#Sugery'),
    baby = document.querySelector('#Baby'),
    lifeStyle = document.querySelector('#lifeStyle'),
    lifeStyleRow = document.querySelector('#lifeStyleRow'),
    dietRow = document.querySelector('#dietRow'),
    skinCareRow = document.querySelector('#skinCareRow')
console.log(lifeStyleRow);


searchIcon.addEventListener('click', function () {
    openSearchBar()
})
function openSearchBar() {
    searchIcon.classList.replace('text-info', 'text-white')
    iconContainer.classList.replace('position-static', 'position-absolute')
    iconContainer.classList.add('bg-info')
    console.log(searchInput);
    searchInput.classList.add('w-100')
    searchInput.style.border = 'solid 1px #ccc'
}
// --------------------------------------- Sugery Start ------------------------------------
sugery.addEventListener('click', function name() {
    goTo('/sugery.html')
})
function goTo(URL) {
    window.location.href = URL
}

let myRow = document.querySelector('#myRow'),
    myArray = [
        {
            id: '0',
            img: '../imgs/diabetes.jpg',
            title: 'السكري',
            details: `السكري (Diabetes) يشمل هذا المصطلح عددًا من الاضطرابات التي تمتاز في وجود مشاكل في هرمون الأنسولين الذي ينتجه البنكرياس بالوضع الطبيعي لمساعدة الجسم استخدام السكر والدهون وتخزين بعضها. أما مرض السكري فيصيب الإنسان عند وجود مشاكل في انتاج هذا الهرمون ليرتفع مستوى السكر في الدم.`
        },
        {
            id: '1',
            img: '../imgs/cancer.jpg',
            title: 'السرطان',
            details: `السرطان هو من اكثر اسباب الوفاة والمثير هو انه بالامكان تفاديه او التقليل بشكل ملحوظ من فرص الاصابة به اذا ما ادركنا ما هي الأسباب وعوامل الخطر وتجنبناها. لمرض السرطان عدة أشكال وأنواع؛ فهناك أكثر من 100 نوع من السرطان، بما في ذلك سرطان الثدي وسرطان الجلد وسرطان الرئة وسرطان القولون وسرطان البروستاتا. `
        },
        {
            id: '2',
            img: '../imgs/teeth-health.jpg',
            title: 'صحة الاسنان',
            details: `يعاني العديد من الأشخاص من رائحة الفم الكريهة والتي تختلف شدتها تبعًا للمسبب لها؛ لذلك نشهد إقبال كبير من الناس على المنتجات أو العلاجات التي تستخدم لعلاج هذه المشكلة، مثل: اللبان بطعم النعناع، ومحاليل غسل الفم وبعض المستحضرات الأخرى التي تهدف إلى محاربة ومنع رائحة الفم الكريهة بشكل مؤقت.`
        },
        {
            id: '3',
            img: '../imgs/alternative-medicine.jpg',
            title: 'الطب البديل',
            details: `الطب البديل أو الطب التكميلي هو أسلوب علاجي يختلف عن الطب الحديث أو التقليدي الذي يقدمه الأطباء في عياداتهم التقليدية، يرتكز أيضًا هذا المجال على العلاقة الوثيقة بين النفس والجسد. هنالك العديد من الفوائد المعروفة لهذا العلاج وبالأخص تلك الصادرة عن الدراسات والأبحاث العلمية، لكنه لا يخلو من الأضرار والآثار الجانبية المحتملة. `
        },
        {
            id: '4',
            img: '../imgs/mental-health.jpg',
            title: 'الصحة النفسية',
            details: `الصحة النفسية شانها كشأن باقي أجهزة الجسم حيث من الممكن ان تتعب وتمرض وتحتاج للعلاج. لا داعي للخجل من الحديث عن الصحة النفسية فمن المهم الوقاية من الأمراض النفسية وعلاجها حين حدوثها. بعض الأمراض النفسية كالقلق، الاكتئاب، الوسواس القهري، الاضطرابات النفسية، الفوبيا وغيرها، أصبحت معروفة. لجميع هذه الأمراض يوجد طرق علاج مختلفة، منها العلاجات النفسية، العلاج السلوكي - الذهني والعلاجات بالأدوية وكذلك العلاجات البديلة.`
        },
        {
            id: '5',
            img: '../imgs/nose-ear-throat.jpg',
            title: 'أنف أذن حنجرة',
            details: `تلعب أجزاء الأنف والأذن والحنجرة أجزاءًا مهمة وذلك لوظائفها الضرورية فالأنف يعمل على تصفية واستنشاق الأكسجين في الغلاف الجوي أما الأذن فتُمكننا من السمع وحفظ توازن الجسم بينما مسؤولية الحنجرة فتقع قياما في إنتاج الأصوات وحماية القصبة الهوائية من دخول جزيئات الطعام. `
        },
        {
            id: '6',
            img: '../imgs/general-health.jpg',
            title: 'صحة عامة',
            details: `هي حالة التوازن النسبي لوظائف الجسم، نتيجةً لِتكيفه مع العوامل المحيطة به و التي يتعرّض لها، وتهدف مؤسسات الصحّة إلى توفير بيئة صحيّة لجميع أفراد المجتمع،وتثقيف الأفراد صحيّاً، من أجل السيطرة على الأمراض الانتقالية، وتوفير الخدمات الصحيّة والطبيّة والتمريضية للمجتمع، مع تشخيص مبكّر للأمراض وتوفير العلاج المناسب`
        },
        {
            id: '7',
            img: '../imgs/skin-diseases.jpg',
            title: 'الجلدية والتناسلية',
            details: `يعتبر الطفح الجلدي في المناطق التناسلية من أكثر الأعراض شيوعًا لدى المصابين بالأمراض الجلدية التناسلية،وتسبّب إمّا آلامًا أو حكّة أو يوصف بعدم الارتياح، ومنها ما يصيب الجلد مؤقتًا ومنها ما يبقى دائمًا، وتنقسم الأمراض المسبّبة للطفح إلى قسمين؛ إمّا طفح يصيب المناطق التناسليّة مع مناطق أخرى من الجسم`
        },
    ],
    index;

function displayData() {
    let container = ``
    myArray.map((info, i) => container += ` <div class="col-lg-3 col-md-6 mb-3">
    <div class="surgery-items position-relative">
        <img src=${info.img} class="w-100" alt="">
        <div id=${info.id} class="surgey-layer position-absolute d-flex justify-content-between align-items-end px-3" onclick="${index = info.id} ; console.log(${index});">
            <h4 class="border rounded-3 p-2 text-white">${info.title}</h4>
            <i class="fa-solid fa-arrow-left bg-info p-2 rounded-circle text-white mb-3"></i>
        </div>
    </div>
    </div>`)
    myRow.innerHTML = container
    console.log(index);
}
window.location.pathname == '/sugery.html' ? displayData() : ''

let clickedItem = Array.from(document.querySelectorAll('.surgey-layer')),
    lightBoxContainer = document.querySelector('#lightBoxContainer'),
    lightBoxItem = document.querySelector('#lightBoxItem')

for (let i = 0; i < clickedItem.length; i++) {
    clickedItem[i].addEventListener('click', function (e) {
        let itemId = e.target.getAttribute('id')
        lightBoxContainer.style.display = 'flex'
        displayModal()
        closeModal()
    })
}

function displayModal() {
    let container = ` <div class="container bg-white rounded-3 p-4 text-center position-relative">
    <h1 class="py-3">${myArray[index].title}</h1>
    <p class="pb-5">${myArray[index].details}</p>
    <div class="ms-auto w-fit-content">
    <i id="close" class="far fa-times-circle"></i>
</div>
</div>`
    lightBoxItem.innerHTML = container
}

function closeModal() {
    let closeBtn = document.querySelector('#close')
    closeBtn.addEventListener('click', function () {
        lightBoxContainer.style.display = 'none'
    })
}
window.location.pathname == '/sugery.html' ? lightBoxContainer.addEventListener(`click`, function (e) {
    if (e.target == lightBoxContainer) {
        lightBoxContainer.style.display = 'none'
    }
}) : ''
// ------------------------------------------- Sugery end ----------------------------------

// ----------------------------------------- baby Start  -----------------------------------

baby.addEventListener('click', function name() {
    goTo('/baby.html')
})
// ------------------------------------------ baby end    -----------------------------------

// -------------------------------------- lifeStyle start  ----------------------------------
lifeStyle.addEventListener('click', function name() {
    goTo('/lifeStyle.html')
})
let lifeStyleArray = [
    {
        imgSrc: 'imgs/lisestyle.jpg',
        title: 'جودة الحياة'
    },
    {
        imgSrc: 'imgs/couple.jpg',
        title: 'الحياة الزوجية'
    },
    {
        imgSrc: 'imgs/eating.jpg',
        title: 'التغذية السليمة'
    },
    {
        imgSrc: 'imgs/diet.jpg',
        title: 'تخفيف الوزن'
    },
    {
        imgSrc: 'imgs/beauty.jpg',
        title: 'البشرة و الجمال'
    },
    {
        imgSrc: 'imgs/hair.jpg',
        title: 'العناية بالشعر'
    }
]
function displayLifeStyleData() {
    let container = ``
    lifeStyleArray.map((info) => container += `<div class="col-lg-2 col-sm-6 col-md-4 mb-4">
    <div class="lifeStyle-items position-relative">
        <img src=${info.imgSrc} class="w-100" alt="">
        <div class="lifeStytle-layer position-absolute d-flex justify-content-center align-items-center">
            <h4 class="py-3 px-2">${info.title}</h4>
        </div>
    </div>
</div>`)
    lifeStyleRow.innerHTML = container
}
window.location.pathname === '/lifeStyle.html' ? displayLifeStyleData() : ''

let dietArray = [
    {
        imgSrc: 'imgs/greentea.jpg',
        title: 'طريقة شرب الشاي الأخضر للتنحيف'
    },
    {
        imgSrc: 'imgs/alarm.jpg',
        title: 'ثبات الوزن في الصيام المتقطع '
    },
    {
        imgSrc: 'imgs/fork.jpg',
        title: 'أنواع اضطراب الأكل'
    },
    {
        imgSrc: 'imgs/fruits.jpg',
        title: 'معدل الحرق الطبيعي للنساء'
    },
    {
        imgSrc: 'imgs/diet1.jpg',
        title: 'تنحيف البطن بالزنجبيل'
    },
    {
        imgSrc: 'imgs/plate.jpg',
        title: 'نظام عجز السعرات'
    }
]
function displayDietData() {
    let container = ``
    dietArray.map((info) => container += ` <div class="col-lg-4 col-md-6 mb-4">
    <div class="diet-items">
        <img src=${info.imgSrc} class="w-100 rounded-3" alt="">
        <h5 class="py-3">${info.title}</h5>
    </div>
</div>`)
    dietRow.innerHTML = container
}
window.location.pathname === '/lifeStyle.html' ? displayDietData() : ''
let skinCareArray = [
    {
        imgSrc: 'imgs/bb.jpg',
        title: 'زيوت لتكبير الثدي'
    },
    {
        imgSrc: 'imgs/skin.jpg',
        title: 'علاج تهيج البشرة بعد التقشير '
    },
    {
        imgSrc: 'imgs/oil.jpg',
        title: 'فوائد زيت اللوز المر للوجه'
    },
    {
        imgSrc: 'imgs/sero.jpg',
        title: 'السبيرولينا للوجه: فوائد ووصفات'
    },
    {
        imgSrc: 'imgs/limon.jpg',
        title: 'أضرار الليمون للبشرة'
    },
    {
        imgSrc: 'imgs/milk.jpg',
        title: 'فوائد الحليب مع العسل'
    }
]
function displaySkinCareData() {
    let container = ``
    skinCareArray.map((info) => container += ` <div class="col-lg-4 col-md-6 mb-4">
    <div class="diet-items">
        <img src=${info.imgSrc} class="w-100 rounded-3" alt="">
        <h5 class="py-3">${info.title}</h5>
    </div>
</div>`)
    skinCareRow.innerHTML = container
}
window.location.pathname === '/lifeStyle.html' ? displaySkinCareData() : ''
// ---------------------------------------- lifeStyle end  ----------------------------------
