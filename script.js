const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        console.log(panel.classList)
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

