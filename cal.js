
    let screen=document.querySelector('.screen')
    let buttons=document.querySelectorAll('.btn')
    let clear=document.querySelector('.btn-clear')
    let equals=document.querySelector('.btn-equal')

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let val=e.target.dataset.num
            screen.value+=val
        })
    })
    equals.addEventListener('click',function(e){
        if (screen.value==="") {
            screen.value=""
        }else{
            let ans=eval(screen.value)
            screen.value=ans
        }

    })
    clear.addEventListener('click',function(e){
        screen.value=""
    })
