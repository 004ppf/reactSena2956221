let mask = document.querySelector('.imgMask')

mask.addEventListener("click", mover)

function mover (){
    console.log('Click a la imagen')
    setTimeout(()=>{
        console.log('se muestra despues de dos segundos')
    }, 2000)
    console.log('Este mensaje se muestra antes')
}