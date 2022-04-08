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
    searchInput.style.border = 'solid 1px #ccc'
}
Sugery.addEventListener('click', function name() {
    goTo('/sugery.html')
})

function goTo(URL) {
    window.location.href = URL
}

let myRow = document.querySelector('#myRow'),
    myArray = [
        {
            id: 'suger',
            img: '../imgs/diabetes.jpg',
            title: 'السكري',
            details: `السكري (Diabetes) يشمل هذا المصطلح عددًا من الاضطرابات التي تمتاز في وجود مشاكل في هرمون الأنسولين الذي ينتجه البنكرياس بالوضع الطبيعي لمساعدة الجسم استخدام السكر والدهون وتخزين بعضها. أما مرض السكري فيصيب الإنسان عند وجود مشاكل في انتاج هذا الهرمون ليرتفع مستوى السكر في الدم.`
        },
        {
            id: 'cancer',
            img: '../imgs/cancer.jpg',
            title: 'السرطان',
            details: `السرطان هو من اكثر اسباب الوفاة والمثير هو انه بالامكان تفاديه او التقليل بشكل ملحوظ من فرص الاصابة به اذا ما ادركنا ما هي الأسباب وعوامل الخطر وتجنبناها. لمرض السرطان عدة أشكال وأنواع؛ فهناك أكثر من 100 نوع من السرطان، بما في ذلك سرطان الثدي وسرطان الجلد وسرطان الرئة وسرطان القولون وسرطان البروستاتا. `
        },
        {
            id: 'teeth',
            img: '../imgs/teeth-health.jpg',
            title: 'صحة الاسنان',
            details: `يعاني العديد من الأشخاص من رائحة الفم الكريهة والتي تختلف شدتها تبعًا للمسبب لها؛ لذلك نشهد إقبال كبير من الناس على المنتجات أو العلاجات التي تستخدم لعلاج هذه المشكلة، مثل: اللبان بطعم النعناع، ومحاليل غسل الفم وبعض المستحضرات الأخرى التي تهدف إلى محاربة ومنع رائحة الفم الكريهة بشكل مؤقت.`
        },
        {
            id: 'alternativeMedicine',
            img: '../imgs/alternative-medicine.jpg',
            title: 'الطب البديل',
            details: `الطب البديل أو الطب التكميلي هو أسلوب علاجي يختلف عن الطب الحديث أو التقليدي الذي يقدمه الأطباء في عياداتهم التقليدية، يرتكز أيضًا هذا المجال على العلاقة الوثيقة بين النفس والجسد. هنالك العديد من الفوائد المعروفة لهذا العلاج وبالأخص تلك الصادرة عن الدراسات والأبحاث العلمية، لكنه لا يخلو من الأضرار والآثار الجانبية المحتملة. `
        },
        {
            id: 'mentalHealth',
            img: '../imgs/mental-health.jpg',
            title: 'الصحة النفسية',
            details: `الصحة النفسية شانها كشأن باقي أجهزة الجسم حيث من الممكن ان تتعب وتمرض وتحتاج للعلاج. لا داعي للخجل من الحديث عن الصحة النفسية فمن المهم الوقاية من الأمراض النفسية وعلاجها حين حدوثها. بعض الأمراض النفسية كالقلق، الاكتئاب، الوسواس القهري، الاضطرابات النفسية، الفوبيا وغيرها، أصبحت معروفة. لجميع هذه الأمراض يوجد طرق علاج مختلفة، منها العلاجات النفسية، العلاج السلوكي - الذهني والعلاجات بالأدوية وكذلك العلاجات البديلة.`
        },
        {
            id: 'noseEarThroat',
            img: '../imgs/nose-ear-throat.jpg',
            title: 'أنف أذن حنجرة',
            details: `تلعب أجزاء الأنف والأذن والحنجرة أجزاءًا مهمة وذلك لوظائفها الضرورية فالأنف يعمل على تصفية واستنشاق الأكسجين في الغلاف الجوي أما الأذن فتُمكننا من السمع وحفظ توازن الجسم بينما مسؤولية الحنجرة فتقع قياما في إنتاج الأصوات وحماية القصبة الهوائية من دخول جزيئات الطعام. `
        },
        {
            id: 'generalHealth',
            img: '../imgs/general-health.jpg',
            title: 'صحة عامة',
            details: `هي حالة التوازن النسبي لوظائف الجسم، نتيجةً لِتكيفه مع العوامل المحيطة به و التي يتعرّض لها، وتهدف مؤسسات الصحّة إلى توفير بيئة صحيّة لجميع أفراد المجتمع،وتثقيف الأفراد صحيّاً، من أجل السيطرة على الأمراض الانتقالية، وتوفير الخدمات الصحيّة والطبيّة والتمريضية للمجتمع، مع تشخيص مبكّر للأمراض وتوفير العلاج المناسب`
        },
        {
            id: 'skinDiseases',
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
        <div id=${info.id} class="surgey-layer position-absolute d-flex justify-content-between align-items-end px-3" onclick="${index = i} ; console.log(${index});">
            <h4 class="border rounded-3 p-2 text-white">${info.title}</h4>
            <i class="fa-solid fa-arrow-left bg-info p-2 rounded-circle text-white mb-3"></i>
        </div>
    </div>
    </div>`)
    myRow.innerHTML = container
    console.log(index);
}
displayData()

let clickedItem = document.querySelectorAll('.surgey-layer'),
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
    <h1 class="py-3">${myArray[0].title}</h1>
    <p class="pb-5">${myArray[0].details}</p>
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
lightBoxContainer.addEventListener(`click`, function (e) {
    if (e.target == lightBoxContainer) {
        lightBoxContainer.style.display = 'none'
    }
})