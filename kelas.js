// const navContent = document.querySelectorAll('.nav-link');
// navContent.forEach(function (elem) {
//     elem.addEventListener('click', function (e) {
//         console.log(elem);
//         console.log(e);
//     })
// })

const tentangKelasToggle = document.querySelector('.nav-item button[data-target="#tentangKelas"]')
const silabusToggle = document.querySelector('.nav-item button[data-target="#silabus"]')
const tentangKelas = document.querySelector('#tentangKelas')
const silabus = document.querySelector('#silabus')


tentangKelasToggle.addEventListener('click', function () {
    // tentangKelas.classList.toggle("showContent")
    tentangKelas.style.display = "inherit"
    silabus.style.display = 'none'
})

silabusToggle.addEventListener('click', function () {
    silabus.style.display = 'inherit'
    tentangKelas.style.display = "none"
})