
const copyBtn = document.querySelector('#btn1')
const textarea = document.querySelector('#textarea1')


copyBtn.addEventListener('click', () => {
    textarea.select()
    document.execCommand('copy')
    copyBtn.setAttribute('data-bs-title', 'Copied!')
    copyBtn.innerHTML = 'Copied'
    alert('Copied text')

})
const copyBtn2 = document.querySelector('#btn2')
const textarea2 = document.querySelector('#textarea2')


copyBtn2.addEventListener('click', () => {
    textarea2.select()
    document.execCommand('copy')

    alert('Copied text')

})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))