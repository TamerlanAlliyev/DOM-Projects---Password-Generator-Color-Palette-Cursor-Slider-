const cursorOuter = document.querySelector('.cursor--outer')
const cursorInner = document.querySelector('.cursor--inner')

const btn = document.querySelector('.btn')

const {width:cWidth,height:cHeight,borderRadius:cBorderRadius} = window.getComputedStyle(cursorOuter)

window.addEventListener('mousemove', (event) => {
    const { x, y, target } = event

    // const cordinant = btn.getBoundingClientRect();
    // console.log(cordinant);

    cursorOuter.style.transform = `translate(${x}px,${y}px)`
    cursorInner.style.transform = `translate(${x}px,${y}px)`

    if(target.classList.contains('btn')){
        // const buttonStyle = window.getComputedStyle(btn)
        const {width: btnWidth,height:btnHeight,borderRadius:btnBorderRadius} = window.getComputedStyle(btn)
        cursorOuter.style.width = btnWidth
        cursorOuter.style.height = btnHeight
        cursorOuter.style.borderRadius = btnBorderRadius
    }else{
        cursorOuter.style.width = cWidth
        cursorOuter.style.height = cHeight
        cursorOuter.style.borderRadius = cBorderRadius
    }
})

