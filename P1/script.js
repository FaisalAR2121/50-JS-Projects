const panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        notactive()
        panel.classList.add('active')
        
        
    })
})

function notactive () {
    panels.forEach((act)=>{act.classList.remove('active')})

}